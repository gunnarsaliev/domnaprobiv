import type { CollectionConfig } from 'payload'

export const Worship: CollectionConfig = {
  slug: 'worship',
  labels: {
    singular: { bg: 'Поклонение', en: 'Worship' },
    plural: { bg: 'Поклонения', en: 'Worship' },
  },
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
      label: { bg: 'Дата', en: 'Date' },
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
      label: { bg: 'Видео URL', en: 'Video URL' },
      admin: {
        position: 'sidebar',
        description: { bg: 'YouTube, Vimeo или друг видео линк', en: 'YouTube, Vimeo, or other video URL' },
      },
    },
  ],
  upload: {
    // Files live only in R2 (see s3Storage plugin); local disk is ephemeral
    // in production, so Payload must never stage/read files from it.
    disableLocalStorage: true,
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
