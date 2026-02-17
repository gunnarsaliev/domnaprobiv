'use client'

import { useState } from 'react'
import { CornerDownRight, Mail, Smartphone } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Contact16Props {
  className?: string
}

const Contact16 = ({ className }: Contact16Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Грешка при изпращане.')
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setErrorMsg('Възникна неочаквана грешка.')
      setStatus('error')
    }
  }

  return (
    <section className={cn('py-12 lg:py-32', className)}>
      <div className="container">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-8xl">
          Контакти
          <sup>*</sup>
        </h1>
        <div className="mt-20 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="w-full max-w-md">
            <p className="tracking-tight text-muted-foreground/90">
              Контактирайте ни за повече информация или за да се присъедините към нашата общност.
            </p>
            <div className="mt-10 flex justify-between">
              <a
                className="flex items-center gap-1 text-foreground/40 hover:text-foreground"
                href="tel:+359895895916"
              >
                <Smartphone className="h-4 w-4" /> +359895895916
              </a>
              <a
                className="flex items-center gap-1 text-foreground/90 hover:text-foreground"
                href="mailto:info@domnaprobiv.com"
              >
                <Mail className="h-4 w-4" /> info@domnaprobiv.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="col-span-4 flex w-full flex-col gap-2 lg:pl-30">
            <Input
              type="text"
              placeholder="Име*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="email"
              placeholder="Имейл*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="text"
              placeholder="Съобщение*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />

            {status === 'success' && (
              <p className="mt-4 text-sm text-green-500">
                Съобщението беше изпратено успешно!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-500">{errorMsg}</p>
            )}

            <Button
              type="submit"
              variant="ghost"
              disabled={status === 'loading'}
              className="mt-15 flex h-15 items-center justify-start gap-2 text-base"
            >
              <CornerDownRight className="size-6" />
              {status === 'loading' ? 'Изпращане...' : 'Изпрати'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export { Contact16 }
