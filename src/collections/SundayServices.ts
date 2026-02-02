import type { CollectionConfig } from 'payload'

export const SundayServices: CollectionConfig = {
  slug: 'sunday-services',
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'YouTube, Vimeo, or other video URL',
      },
    },
  ],
  upload: {
    mimeTypes: ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav', 'audio/wave'],
  },
}
