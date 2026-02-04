import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import Map from '@/components/map'
import Link from 'next/link'
import { Icon } from '@iconify/react'
interface Cta15Props {
  className?: string
}

const Cta15 = ({ className }: Cta15Props) => {
  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-gray-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-gray-200),transparent)] lg:pl-20">
          <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium">Къде може да ни намерите?</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">ул. Дондуков-Корсаков, Русе</h2>
            <p className="text-lg text-muted-foreground">
              Нашата църква е разположена в сградата на старата поща, в близост до градската
              библиотека.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="https://www.google.com/maps/dir/43.8369094,25.9737108/%D0%90%D0%BF%D0%BE%D1%81%D1%82%D0%BE%D0%BB%D1%81%D0%BA%D0%B0+%D1%86%D1%8A%D1%80%D0%BA%D0%B2%D0%B0+%E2%80%9D%D0%94%D0%BE%D0%BC+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%B8%D0%B2%E2%80%9D,+Ruse+Center,+ul.+%22Knyaz+Al.+Dondukov+Korsakov%22+5-1,+7000+Ruse/@43.838857,25.9417616,4702m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40ae6111cd93aab3:0x6758fe556dc06972!2m2!1d25.948764!2d43.843784?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D">
                <Button className="gap-2">
                  <Icon icon="logos:google-maps" className="h-5 w-5" />
                  Google Maps
                </Button>
              </Link>
              <Link href="https://ul.waze.com/ul?place=ChIJs6qTzRFhrkARcmnAbVX-WGc&ll=43.84376740%2C25.94870770&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
                <Button variant="outline" className="gap-2">
                  <Icon icon="simple-icons:waze" className="h-5 w-5" />
                  Отвори в Waze
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
            <div className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl overflow-hidden">
              <Map
                height="400px"
                width="100%"
                className="rounded-tl-2xl rounded-br-2xl"
                center={[43.843761, 25.94877]}
                zoom={18}
                scrollWheelZoom={false}
                markers={[
                  {
                    position: [43.843761, 25.94877],
                    popup: 'Дом на пробив',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta15 }
