import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Simple richText renderer for Lexical content
function RichTextRenderer({ content }: { content: any }) {
  if (!content || !content.root?.children) {
    return null
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {content.root.children.map((node: any, index: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={index}>
              {node.children?.map((child: any, childIndex: number) => {
                let text = child.text || ''
                if (child.format & 1) text = <strong key={childIndex}>{text}</strong>
                if (child.format & 2) text = <em key={childIndex}>{text}</em>
                if (child.format & 8) text = <u key={childIndex}>{text}</u>
                return text
              })}
            </p>
          )
        }
        if (node.type === 'heading') {
          const Tag = `h${node.tag}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          return (
            <Tag key={index}>
              {node.children?.map((child: any) => child.text).join('')}
            </Tag>
          )
        }
        if (node.type === 'list') {
          const ListTag = node.listType === 'bullet' ? 'ul' : 'ol'
          return (
            <ListTag key={index}>
              {node.children?.map((listItem: any, liIndex: number) => (
                <li key={liIndex}>
                  {listItem.children?.map((child: any) => child.text).join('')}
                </li>
              ))}
            </ListTag>
          )
        }
        return null
      })}
    </div>
  )
}

interface MinistryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function MinistryPage({ params }: MinistryPageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const ministries = await payload.find({
    collection: 'ministries',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const ministry = ministries.docs[0]

  if (!ministry) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/sluzheniya">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад към служенията
        </Link>
      </Button>

      {ministry.image && typeof ministry.image === 'object' && (
        <div className="relative h-96 w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={ministry.image.url || ''}
            alt={ministry.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{ministry.name}</h1>

      {ministry.videoUrl && (
        <div className="mb-8">
          <div className="aspect-video w-full">
            <iframe
              src={ministry.videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {ministry.description && (
        <div className="mb-8">
          <RichTextRenderer content={ministry.description} />
        </div>
      )}

      {ministry.gallery && ministry.gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Галерия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ministry.gallery.map((item: any, index: number) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                {item.image && typeof item.image === 'object' && (
                  <Image
                    src={item.image.url || ''}
                    alt={`${ministry.name} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {ministry.users && ministry.users.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Лидери на служенето</h2>
          <div className="space-y-2">
            {ministry.users.map((user: any) => (
              <div key={user.id} className="text-lg">
                {typeof user === 'object' ? user.name || user.email : user}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
