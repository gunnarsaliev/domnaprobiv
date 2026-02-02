import { CircleArrowRight, Files, Settings } from 'lucide-react'

import { cn } from '@/lib/utils'

interface About1Props {
  className?: string
}

const About1 = ({ className }: About1Props) => {
  return (
    <section className={cn('py-12 lg:py-32', className)}>
      <div className="container flex flex-col gap-16 lg:gap-28">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-semibold tracking-tighter lg:text-7xl">За нас</h1>
          <p className="max-w-xl text-xl">
            Да изградим общността на църквата в центъра на града и да създадем място за духовен
            растеж и обновление.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/christin-hume-Hcfwew744z4-unsplash.jpg')] bg-cover bg-center p-10">
            <p className="text-sm font-semibold text-white">Нашата мисия</p>
            <p className="text-lg font-medium text-white">
              Да изградим общността на църквата в центъра на града и да създадем място за духовен
              растеж и обновление.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Да създадем място за духовен растеж и обновление.
            </h2>
            <p className="text-lg text-muted-foreground">
              Да изградим общността на църквата в центъра на града и да създадем място за духовен
              растеж и обновление.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Да изградим общността на църквата в центъра на града
              </h3>
              <p className="text-muted-foreground">
                Да създадем място за духовен растеж и обновление.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Да създадем място за духовен растеж и обновление.
              </h3>
              <p className="text-muted-foreground">
                Да създадем място за духовен растеж и обновление.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Да създадем място за духовен растеж и обновление.
              </h3>
              <p className="text-muted-foreground">
                Да създадем място за духовен растеж и обновление.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About1 }
