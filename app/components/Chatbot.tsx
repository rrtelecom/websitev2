'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const RETRY_SECONDS = 15

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! How can I help you with telecom or security solutions today?' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [retryIn, setRetryIn] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pendingMessages = useRef<Message[] | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (retryIn <= 0) return
    const t = setTimeout(() => setRetryIn((n) => n - 1), 1000)
    return () => clearTimeout(t)
  }, [retryIn])

  useEffect(() => {
    if (retryIn === 0 && pendingMessages.current) {
      const queued = pendingMessages.current
      pendingMessages.current = null
      doFetch(queued)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retryIn])

  const doFetch = useCallback(async (next: Message[]) => {
    setLoading(true)
    setMessages([...next, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (res.status === 429) {
        pendingMessages.current = next
        setRetryIn(RETRY_SECONDS)
        setMessages([...next, { role: 'assistant', content: '' }])
        return
      }

      if (!res.ok || !res.body) {
        setMessages([...next, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (parsed.error) {
              setMessages([...next, { role: 'assistant', content: parsed.error }])
              return
            }
            if (parsed.text) {
              accumulated += parsed.text
              setMessages([...next, { role: 'assistant', content: accumulated }])
            }
          } catch { /* skip malformed lines */ }
        }
      }
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }, [])

  async function send() {
    const text = input.trim()
    if (!text || loading || retryIn > 0) return

    const next: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    doFetch(next)
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const isRetrying = retryIn > 0

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-end">
        <div
          className={`absolute right-0 bottom-full mb-3 w-80 sm:w-96 origin-bottom-right transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-3 scale-[0.96] opacity-0'
          }`}
          aria-hidden={!open}
          inert={!open ? true : undefined}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: '480px' }}
          >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="white" fillOpacity=".6"/>
                  <path d="M8 5a1 1 0 011 1v2.5h1.5a1 1 0 010 2H7a1 1 0 010-2h.5V7a1 1 0 00-1-1H6a1 1 0 010-2h2z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold leading-tight">R.R. Telecom Assistant</div>
                <div className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full inline-block ${isRetrying ? 'bg-yellow-400' : 'bg-green-400'}`} />
                  <span className="text-blue-100 text-xs">
                    {isRetrying ? `Retrying in ${retryIn}s…` : 'Online'}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-slate-800 text-slate-100 rounded-bl-sm'
                  }`}
                >
                  {msg.content
                    ? <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-4 mb-1 space-y-0.5">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 mb-1 space-y-0.5">{children}</ol>,
                          li: ({ children }) => <li>{children}</li>,
                          a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="underline">{children}</a>,
                        }}
                      >{msg.content}</ReactMarkdown>
                    : (loading || isRetrying) && i === messages.length - 1
                      ? <span className="inline-flex gap-1 items-center">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </span>
                      : null
                  }
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-slate-700 shrink-0">
            <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={isRetrying ? `Retrying in ${retryIn}s…` : 'Ask about products or services…'}
                disabled={loading || isRetrying}
                className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-sm outline-none min-w-0"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading || isRetrying}
                className="w-7 h-7 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-colors shrink-0"
                aria-label="Send"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 2l4.5 4.5L7 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 4a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H7l-4 3V4z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
