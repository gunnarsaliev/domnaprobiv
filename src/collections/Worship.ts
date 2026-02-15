import type { CollectionConfig } from 'payload'

export const Worship: CollectionConfig = {
  slug: 'worship',
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
      required: false,
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
    mimeTypes: [
      'audio/mpeg',
      'audio/mp3',
      'audio/mpg',
      'audio/wav',
      'audio/x-wav',
      'audio/wave',
      'audio/ogg',
      'audio/webm',
      'audio/x-m4a',
      'audio/mp4',
      'audio/aac',
      'audio/flac',
      'text/plain', // MP3 files are sometimes fingerprinted as text/plain
    ],
  },
}
