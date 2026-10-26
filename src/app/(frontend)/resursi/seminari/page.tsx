import { SeminarList } from '@/components/seminars/SeminarList'
import { listSeminars } from '@/components/seminars/get-seminars'
import { seminarListMetadata } from '@/components/seminars/metadata'

export const dynamic = 'force-dynamic'

export const metadata = seminarListMetadata('bg')

export default async function SeminarsPage() {
  const seminars = await listSeminars('bg')
  return <SeminarList seminars={seminars} locale="bg" />
}
