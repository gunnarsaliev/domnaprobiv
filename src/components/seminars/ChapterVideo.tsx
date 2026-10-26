'use client'

import { useCallback, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SeminarVideoPlayer } from './SeminarVideoPlayer'
import { seminarLabels, type SeminarLocale } from './labels'

interface ChapterVideoProps {
  src: string
  title: string
  locale: SeminarLocale
  allowDownload: boolean
}

export function ChapterVideo({ src, title, locale, allowDownload }: ChapterVideoProps) {
  const t = seminarLabels[locale]
  const [failed, setFailed] = useState(false)
  const handleError = useCallback(() => setFailed(true), [])

  return (
    <section className="mb-8">
      <SeminarVideoPlayer src={src} title={title} onError={handleError} />
      {(failed || allowDownload) && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {failed && (
            <p className="text-sm text-muted-foreground">
              {allowDownload ? t.videoUnsupported : t.videoUnsupportedNoDownload}
            </p>
          )}
          {/* .mkv only decodes in some browsers (not Safari), so offer the file when allowed */}
          {allowDownload && (
            <Button asChild variant="outline" size="sm">
              <a href={src} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t.openVideo}
              </a>
            </Button>
          )}
        </div>
      )}
    </section>
  )
}
