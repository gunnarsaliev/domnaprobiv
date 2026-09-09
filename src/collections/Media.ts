import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: { bg: 'Медия', en: 'Media' },
    plural: { bg: 'Медии', en: 'Media' },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      localized: true,
      label: { bg: 'Алт текст', en: 'Alt text' },
    },
  ],
  upload: {
    // These are not supported on Workers yet due to lack of sharp
    crop: false,
    focalPoint: false,
    // Files live only in R2 (see s3Storage plugin); local disk is ephemeral
    // in production, so Payload must never stage/read files from it.
    disableLocalStorage: true,
  },
}
