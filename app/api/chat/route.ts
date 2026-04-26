import OpenAI from 'openai'

const RATE_LIMIT = 5
const WINDOW_MS = 60_000

const ipMap = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipMap.get(ip)
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

const SYSTEM_PROMPT = `You are a helpful assistant for R.R. Telecommunication, a telecom and security solutions company based in Mumbai/Maharashtra, India, serving clients since 2012.

Key facts about the company:
- Authorized dealer for NEC, Panasonic, Hikvision, CP Plus, Beetel, D-Link
- Products: EPABX systems, CCTV cameras, landline phones, networking equipment, intercom systems
- Services: supply, installation, and maintenance across Maharashtra
- 13+ years in business, 5-star rated on IndiaMART
- Contact: contact@rrtelecommunications.com

Help users with product inquiries, pricing questions, installation queries, and direct them to contact the company for quotes. Keep responses concise and professional.`

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return new Response('Too many requests. Please wait a moment before sending another message.', { status: 429 })
  }

  let body: { messages?: { role: string; content: string }[] }
  try {
    body = await request.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const messages = body.messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response('No messages provided', { status: 400 })
  }

  const apiKey = process.env.BEDROCK_API_KEY
  const baseURL = process.env.BEDROCK_BASE_URL
  const model = process.env.BEDROCK_MODEL ?? 'openai.gpt-oss-120b'

  if (!apiKey || !baseURL) {
    return new Response('Chatbot is not configured', { status: 503 })
  }

  const client = new OpenAI({ apiKey, baseURL })

  const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),
  ]

  const encoder = new TextEncoder()

  function sseEvent(data: string) {
    return encoder.encode(`data: ${data}\n\n`)
  }

  let stream: AsyncIterable<OpenAI.Chat.ChatCompletionChunk>
  try {
    stream = await client.chat.completions.create({
      model,
      messages: openaiMessages,
      stream: true,
    })
  } catch (err: unknown) {
    const status = (err as { status?: number })?.status
    if (status === 429) {
      return new Response('throttled', { status: 429 })
    }
    console.error('[chat] Bedrock error:', err)
    return new Response('Failed to reach AI service. Please try again later.', { status: 502 })
  }

  const capturedStream = stream
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of capturedStream) {
          const text = chunk.choices[0]?.delta?.content
          if (text) {
            controller.enqueue(sseEvent(JSON.stringify({ text })))
          }
        }
        controller.enqueue(sseEvent('[DONE]'))
      } catch (err: unknown) {
        const status = (err as { status?: number })?.status
        const msg = status === 429
          ? 'The AI service is busy. Please try again in a moment.'
          : 'Stream interrupted. Please try again.'
        controller.enqueue(sseEvent(JSON.stringify({ error: msg })))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}
