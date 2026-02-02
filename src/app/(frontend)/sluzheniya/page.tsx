import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Helper function to extract text from richText
function extractTextFromRichText(richText: any): string {
  if (!richText) return ''
  if (typeof richText === 'string') return richText

  // Extract text from Lexical JSON structure
  try {
    if (richText.root?.children) {
      return richText.root.children
        .map((child: any) => {
          if (child.children) {
            return child.children.map((c: any) => c.text || '').join(' ')
          }
          return child.text || ''
        })
        .join(' ')
        .slice(0, 150)
    }
  } catch (e) {
    return ''
  }
  return ''
}

export default async function ServicesPage() {
  const payload = await getPayload({ config })

  const ministries = await payload.find({
    collection: 'ministries',
    limit: 100,
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Нашите служения</h1>
        <p className="text-lg text-muted-foreground">
          Открийте как можете да се включите и да служите
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {ministries.docs.map((ministry) => (
          <Card key={ministry.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {ministry.image && typeof ministry.image === 'object' && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={ministry.image.url || ''}
                  alt={ministry.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{ministry.name}</CardTitle>
              {ministry.description && (
                <CardDescription className="line-clamp-3">
                  {extractTextFromRichText(ministry.description) || 'Научете повече за това служене'}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/sluzheniya/${ministry.slug}`}>Виж повече</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {ministries.docs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Все още няма добавени служения.</p>
        </div>
      )}
    </div>
  )
}
