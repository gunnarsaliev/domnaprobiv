import type { TextField } from 'payload'

export const slugField = (fieldToUse = 'title'): TextField => ({
  name: 'slug',
  type: 'text',
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    components: {
      Field: {
        path: '@/lib/slug/SlugComponent',
        exportName: 'SlugComponent',
        clientProps: {
          fieldToUse,
        },
      },
    },
  },
})
