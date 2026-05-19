import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: { bg: 'Потребител', en: 'User' },
    plural: { bg: 'Потребители', en: 'Users' },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: false,
      label: { bg: 'Име', en: 'Name' },
    },
    {
      name: 'verse',
      type: 'textarea',
      required: false,
      label: { bg: 'Стих', en: 'Verse' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: { bg: 'Снимка', en: 'Image' },
    },
    {
      name: 'roles',
      type: 'select',
      required: true,
      defaultValue: 'user',
      label: { bg: 'Роля', en: 'Role' },
      options: [
        {
          label: { bg: 'Супер админ', en: 'Super Admin' },
          value: 'super-admin',
        },
        {
          label: { bg: 'Админ', en: 'Admin' },
          value: 'admin',
        },
        {
          label: { bg: 'Потребител', en: 'User' },
          value: 'user',
        },
        {
          label: { bg: 'Редактор', en: 'Editor' },
          value: 'editor',
        },
        {
          label: { bg: 'Наблюдател', en: 'Viewer' },
          value: 'viewer',
        },
      ],
    },
    {
      name: 'ministries',
      type: 'relationship',
      relationTo: 'ministries',
      hasMany: true,
      required: false,
      label: { bg: 'Служения', en: 'Ministries' },
    },
    {
      name: 'about',
      type: 'textarea',
      required: false,
      localized: true,
      label: { bg: 'За мен', en: 'About' },
    },
  ],
}
