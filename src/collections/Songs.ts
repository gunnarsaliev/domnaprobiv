import type { CollectionConfig } from 'payload'

export const Songs: CollectionConfig = {
  slug: 'songs',
  labels: {
    singular: { bg: 'Песен', en: 'Song' },
    plural: { bg: 'Песни', en: 'Songs' },
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
