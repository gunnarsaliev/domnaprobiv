import { getPayload } from 'payload'
import config from '@payload-config'
import { CustomWorshipPlayer } from '@/components/custom-worship-player'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function NedelniSubraniya() {
  const payload = await getPayload({ config })

  const { docs: sundayServices } = await payload.find({
    collection: 'sunday-services',
    limit: 100,
    sort: '-date', // Sort by date descending (newest first)
  })

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Неделни проповеди</h1>
          <p className="text-muted-foreground">
            Слушайте аудио записи от нашите неделни проповеди
          </p>
        </div>

        <CustomWorshipPlayer worshipSongs={sundayServices} />
      </div>
    </main>
  )
}