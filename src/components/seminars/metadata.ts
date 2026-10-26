import type { Metadata } from 'next'
import { getChapterIndex, getSeminarBySlug } from './get-seminars'
import { seminarLabels, type SeminarLocale } from './labels'

export const seminarListMetadata = (locale: SeminarLocale): Metadata => ({
  title: seminarLabels[locale].seminars,
  description: seminarLabels[locale].seminarsIntro,
})

export async function seminarMetadata(slug: string, locale: SeminarLocale): Promise<Metadata> {
  const seminar = await getSeminarBySlug(slug, locale)
  return seminar ? { title: seminar.title } : {}
}

export async function chapterMetadata(
  slug: string,
  chapter: string,
  locale: SeminarLocale,
): Promise<Metadata> {
  const seminar = await getSeminarBySlug(slug, locale)
  const index = seminar ? getChapterIndex(seminar, chapter) : null
  if (!seminar || index === null) return {}
  return { title: `${seminar.chapters[index].title} – ${seminar.title}` }
}
