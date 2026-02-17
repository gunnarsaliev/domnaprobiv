import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Всички полета са задължителни.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Дом на пробив <noreply@contact.domnaprobiv.com>',
      to: 'info@domnaprobiv.com',
      replyTo: email,
      subject: `Ново съобщение от ${name}`,
      text: `Име: ${name}\nИмейл: ${email}\n\nСъобщение:\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Грешка при изпращане на имейл.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Възникна неочаквана грешка.' }, { status: 500 })
  }
}
