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
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
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
}
