import { notFound } from 'next/navigation'
import { SeminarOverview } from '@/components/seminars/SeminarOverview'
import { getSeminarBySlug } from '@/components/seminars/get-seminars'
import { seminarMetadata } from '@/components/seminars/metadata'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  return seminarMetadata(slug, 'en')
}

export default async function SeminarPage({ params }: Props) {
  const { slug } = await params
  const seminar = await getSeminarBySlug(slug, 'en')
  if (!seminar) notFound()

  return <SeminarOverview seminar={seminar} locale="en" />
}
