import type { CollectionConfig } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  ParagraphFeature,
  HeadingFeature,
  AlignFeature,
  BlockquoteFeature,
  UnorderedListFeature,
  OrderedListFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: { bg: 'Свидетелство', en: 'Testimonial' },
    plural: { bg: 'Свидетелства', en: 'Testimonials' },
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
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
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      label: { bg: 'Съдържание', en: 'Content' },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          AlignFeature(),
          ParagraphFeature(),
          BlockquoteFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          LinkFeature(),
        ],
      }),
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
  ],
}
