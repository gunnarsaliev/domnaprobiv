import { notFound } from 'next/navigation'
import { ChapterView } from '@/components/seminars/ChapterView'
import { getChapterIndex, getSeminarBySlug } from '@/components/seminars/get-seminars'
import { chapterMetadata } from '@/components/seminars/metadata'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string; chapter: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug, chapter } = await params
  return chapterMetadata(slug, chapter, 'bg')
}

export default async function SeminarChapterPage({ params }: Props) {
  const { slug, chapter } = await params
  const seminar = await getSeminarBySlug(slug, 'bg')
  const index = seminar ? getChapterIndex(seminar, chapter) : null
  if (!seminar || index === null) notFound()

  return <ChapterView seminar={seminar} index={index} locale="bg" />
}
