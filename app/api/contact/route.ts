import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type Body = {
  name?: string
  email?: string
  phone?: string
  message?: string
  _hp?: string
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const hp = typeof body._hp === 'string' ? body._hp.trim() : ''
  if (hp.length > 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[api/contact] Honeypot was filled; email not sent (often browser autofill on a hidden field).'
      )
    }
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || name.length > 120) {
    return NextResponse.json({ error: 'Please enter your name (max 120 characters).' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (phone.length > 40) {
    return NextResponse.json({ error: 'Phone number is too long.' }, { status: 400 })
  }
  if (message.length < 10 || message.length > 8000) {
    return NextResponse.json(
      { error: 'Message must be between 10 and 8000 characters.' },
      { status: 400 }
    )
  }

  const host = process.env.SMTP_HOST?.trim()
  const portRaw = process.env.SMTP_PORT?.trim()
  const port = portRaw ? parseInt(portRaw, 10) : 587
  const secureEnv = process.env.SMTP_SECURE?.trim().toLowerCase()
  const secure =
    secureEnv === 'true' ||
    secureEnv === '1' ||
    (!Number.isNaN(port) && port === 465)
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()
  const from = process.env.SMTP_FROM?.trim()
  const to = process.env.CONTACT_TO_EMAIL?.trim()

  if (!host || Number.isNaN(port) || !from || !to) {
    return NextResponse.json(
      {
        error:
          'Contact form is not configured. Set SMTP_HOST, SMTP_PORT (optional, default 587), SMTP_FROM, CONTACT_TO_EMAIL, and SMTP_USER/SMTP_PASS if your server requires authentication.',
      },
      { status: 503 }
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    ...(user && pass ? { auth: { user, pass } } : {}),
  })

  const subject = `[Website contact] ${name}`
  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
  `

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : '',
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })
    if (process.env.NODE_ENV === 'development') {
      console.log('[api/contact] SMTP accepted:', info.messageId, info.response?.slice?.(0, 200))
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[api/contact] SMTP send failed:', err)
    }
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}
