import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowLeft, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { seminarLabels, type SeminarLocale } from './labels'
import type { PublicSeminar } from './get-seminars'

export function SeminarOverview({
  seminar,
  locale,
}: {
  seminar: PublicSeminar
  locale: SeminarLocale
}) {
  const t = seminarLabels[locale]
  const speakers = seminar.speakerNames

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href={t.basePath}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToSeminars}
        </Link>
      </Button>

      <h1 className="mb-2 text-4xl font-bold md:text-5xl">{seminar.title}</h1>
      {speakers.length > 0 && (
        <p className="mb-8 text-sm text-muted-foreground">
          {t.speakers}: {speakers.join(', ')}
        </p>
      )}

      {seminar.description && (
        <RichText
          data={seminar.description}
          className="prose prose-lg dark:prose-invert mb-10 max-w-none"
        />
      )}

      <h2 className="mb-4 text-2xl font-bold">{t.chapters}</h2>
      <ol className="divide-y rounded-lg border">
        {seminar.chapters.map((chapter, index) => (
          <li key={chapter.id ?? index}>
            <Link
              href={`${t.basePath}/${seminar.slug}/${index + 1}`}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
            >
              <span className="w-8 text-right font-mono text-muted-foreground">{index + 1}.</span>
              <span className="flex-1 font-medium">{chapter.title}</span>
              <PlayCircle className="h-5 w-5 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
