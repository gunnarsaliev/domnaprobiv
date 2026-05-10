import type { CollectionConfig } from 'payload'
import { slugField } from '@/lib/slug'

export const Ministries: CollectionConfig = {
  slug: 'ministries',
  labels: {
    singular: { bg: 'Служение', en: 'Ministry' },
    plural: { bg: 'Служения', en: 'Ministries' },
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      label: { bg: 'Име', en: 'Name' },
    },
    slugField('name'),
    {
      name: 'description',
      type: 'richText',
      required: false,
      localized: true,
      label: { bg: 'Описание', en: 'Description' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: { bg: 'Снимка', en: 'Image' },
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      label: { bg: 'Видео URL', en: 'Video URL' },
      admin: {
        position: 'sidebar',
        description: { bg: 'YouTube, Vimeo или друг видео линк', en: 'YouTube, Vimeo, or other video URL' },
      },
    },
    {
      name: 'gallery',
      type: 'array',
      required: false,
      label: { bg: 'Галерия', en: 'Gallery' },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: { bg: 'Снимка', en: 'Image' },
        },
      ],
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      required: false,
      label: { bg: 'Потребители', en: 'Users' },
    },
  ],
}
