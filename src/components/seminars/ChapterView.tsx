import Link from 'next/link'
import { ArrowLeft, ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChapterVideo } from './ChapterVideo'
import type { PublicSeminar } from './get-seminars'
import { seminarLabels, type SeminarLocale } from './labels'
import { toYouTubeEmbed } from './youtube'

interface ChapterViewProps {
  seminar: PublicSeminar
  index: number
  locale: SeminarLocale
}

export function ChapterView({ seminar, index, locale }: ChapterViewProps) {
  const t = seminarLabels[locale]
  const chapter = seminar.chapters[index]
  const seminarPath = `${t.basePath}/${seminar.slug}`
  const embedUrl = chapter.youtubeUrl ? toYouTubeEmbed(chapter.youtubeUrl) : null
  const speakers = seminar.speakerNames
  const hasPrev = index > 0
  const hasNext = index < seminar.chapters.length - 1

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href={seminarPath}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToSeminar}
        </Link>
      </Button>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0">
          <p className="mb-1 text-sm text-muted-foreground">{seminar.title}</p>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            {t.chapter} {index + 1}: {chapter.title}
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">
            {speakers.length > 0 && `${t.speakers}: ${speakers.join(', ')}`}
          </p>

          {chapter.videoUrl && (
            <ChapterVideo
              src={chapter.videoUrl}
              title={chapter.title}
              locale={locale}
              allowDownload={Boolean(seminar.allowVideoDownload)}
            />
          )}

          {embedUrl && (
            <div className="mb-8 aspect-video w-full">
              <iframe
                src={embedUrl}
                title={chapter.title}
                className="h-full w-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {chapter.audioUrl && (
            <section className="mb-8 rounded-lg border p-4">
              <h2 className="mb-3 font-semibold">{t.listen}</h2>
              <audio
                controls
                preload="none"
                src={chapter.audioUrl}
                className="w-full"
                controlsList={seminar.allowAudioDownload ? undefined : 'nodownload'}
              />
              {seminar.allowAudioDownload && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={chapter.audioUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      {t.downloadAudio}
                    </a>
                  </Button>
                </div>
              )}
            </section>
          )}

          <nav className="flex justify-between gap-4 border-t pt-6">
            {hasPrev ? (
              <Button asChild variant="ghost">
                <Link href={`${seminarPath}/${index}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.previous}
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {hasNext && (
              <Button asChild variant="ghost">
                <Link href={`${seminarPath}/${index + 2}`}>
                  {t.next}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </nav>
        </div>

        <aside>
          <h2 className="mb-3 font-semibold">{t.chapters}</h2>
          <ol className="space-y-1">
            {seminar.chapters.map((c, i) => (
              <li key={c.id ?? i}>
                <Link
                  href={`${seminarPath}/${i + 1}`}
                  aria-current={i === index ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted',
                    i === index && 'bg-muted font-semibold',
                  )}
                >
                  {i + 1}. {c.title}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}
