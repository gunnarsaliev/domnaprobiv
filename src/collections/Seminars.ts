import type { CollectionConfig, TextFieldSingleValidation } from 'payload'
import { editors } from '@/access/editors'
import { publishedOrAuthenticated } from '@/access/publishedOrAuthenticated'
import { slugField } from '@/lib/slug'

const validateUrl: TextFieldSingleValidation = (value, { required }) => {
  if (!value) return required ? 'Задължително поле / This field is required' : true
  try {
    const { protocol } = new URL(value)
    return protocol === 'http:' || protocol === 'https:' ? true : 'Невалиден URL / Invalid URL'
  } catch {
    return 'Невалиден URL / Invalid URL'
  }
}

const validateYouTubeUrl: TextFieldSingleValidation = (value, args) => {
  const result = validateUrl(value, args)
  if (result !== true || !value) return result
  return /(^|\.)(youtube\.com|youtu\.be)$/.test(new URL(value).hostname)
    ? true
    : 'Трябва да е YouTube линк / Must be a YouTube URL'
}

export const Seminars: CollectionConfig = {
  slug: 'seminars',
  labels: {
    singular: { bg: 'Семинар', en: 'Seminar' },
    plural: { bg: 'Семинари', en: 'Seminars' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'uploader', '_status', 'updatedAt'],
  },
  access: {
    read: publishedOrAuthenticated,
    create: editors,
    update: editors,
    delete: editors,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: { bg: 'Заглавие', en: 'Title' },
    },
    slugField('title'),
    {
      name: 'description',
      type: 'richText',
      required: false,
      localized: true,
      label: { bg: 'Описание', en: 'Description' },
    },
    {
      name: 'speakers',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      required: false,
      label: { bg: 'Говорители', en: 'Speakers' },
    },
    {
      name: 'uploader',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      label: { bg: 'Качил', en: 'Uploader' },
      defaultValue: ({ user }) => user?.id,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ value, operation, req }) => {
            if (operation === 'create' && !value && req.user) return req.user.id
            return value
          },
        ],
      },
    },
    {
      name: 'allowVideoDownload',
      type: 'checkbox',
      defaultValue: false,
      label: { bg: 'Разреши изтегляне на видео', en: 'Allow video download' },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'allowAudioDownload',
      type: 'checkbox',
      defaultValue: false,
      label: { bg: 'Разреши изтегляне на MP3', en: 'Allow MP3 download' },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'chapters',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: { bg: 'Глава', en: 'Chapter' },
        plural: { bg: 'Глави', en: 'Chapters' },
      },
      label: { bg: 'Глави', en: 'Chapters' },
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/components/admin/ChapterRowLabel#ChapterRowLabel',
        },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: { bg: 'Заглавие', en: 'Title' },
        },
        {
          name: 'youtubeUrl',
          type: 'text',
          required: false,
          label: { bg: 'YouTube URL', en: 'YouTube URL' },
          validate: validateYouTubeUrl,
        },
        {
          name: 'videoUrl',
          type: 'text',
          required: false,
          label: { bg: 'Видео URL (pCloud)', en: 'Video URL (pCloud)' },
          validate: validateUrl,
        },
        {
          name: 'audioUrl',
          type: 'text',
          required: false,
          label: { bg: 'MP3 URL (pCloud)', en: 'MP3 URL (pCloud)' },
          validate: validateUrl,
        },
      ],
    },
  ],
}
