import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { seminarLabels, type SeminarLocale } from './labels'
import type { PublicSeminar } from './get-seminars'

export function SeminarList({
  seminars,
  locale,
}: {
  seminars: PublicSeminar[]
  locale: SeminarLocale
}) {
  const t = seminarLabels[locale]

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-2 text-4xl font-bold md:text-5xl">{t.seminars}</h1>
      <p className="mb-10 text-muted-foreground">{t.seminarsIntro}</p>

      {seminars.length === 0 ? (
        <p className="text-muted-foreground">{t.noSeminars}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {seminars.map((seminar) => {
            const speakers = seminar.speakerNames
            return (
              <Link key={seminar.id} href={`${t.basePath}/${seminar.slug}`} className="group">
                <Card className="h-full p-6 transition-colors group-hover:bg-muted/50">
                  <h2 className="text-2xl font-semibold tracking-tight">{seminar.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.chapterCount(seminar.chapters.length)}
                    {speakers.length > 0 && ` · ${speakers.join(', ')}`}
                  </p>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
