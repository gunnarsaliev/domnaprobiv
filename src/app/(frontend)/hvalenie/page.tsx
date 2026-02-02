import { getPayload } from 'payload'
import config from '@payload-config'
import { CustomWorshipPlayer } from '@/components/custom-worship-player'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Hvalenie() {
  const payload = await getPayload({ config })

  const { docs: worshipSongs } = await payload.find({
    collection: 'worship',
    limit: 100,
    sort: '-date', // Sort by date descending (newest first)
  })

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Хваление</h1>
          <p className="text-muted-foreground">
            Слушайте записи от нашите служби на хваление и поклонение
          </p>
        </div>

        <CustomWorshipPlayer worshipSongs={worshipSongs} />
      </div>
    </main>
  )
}