import { CornerDownRight, Mail, Smartphone } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Contact16Props {
  className?: string
}

const Contact16 = ({ className }: Contact16Props) => {
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
                href="tel:+359888888888"
              >
                {' '}
                <Smartphone className="h-4 w-4" /> +359895895916
              </a>
              <a
                className="flex items-center gap-1 text-foreground/90 hover:text-foreground"
                href="mailto:info@domnaprobiv.com"
              >
                {' '}
                <Mail className="h-4 w-4" /> info@domnaprobiv.com
              </a>
            </div>
          </div>
          <form className="col-span-4 flex w-full flex-col gap-2 lg:pl-30">
            <Input
              type="text"
              placeholder="Име*"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="email"
              placeholder="Имейл*"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Input
              type="text"
              placeholder="Съобщение (Кажете ни за вашето проект)"
              className="h-19 rounded-none border-0 border-b border-b-foreground/15 !bg-transparent placeholder:text-foreground/20 focus-visible:ring-0"
            />
            <Button
              variant="ghost"
              className="mt-15 flex h-15 items-center justify-start gap-2 text-base"
            >
              <CornerDownRight className="size-6" />
              Изпрати
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export { Contact16 }
