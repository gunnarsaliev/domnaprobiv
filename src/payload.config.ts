import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { bg } from 'payload/i18n/bg'
import { en } from 'payload/i18n/en'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Ministries } from './collections/Ministries'
import { Songs } from './collections/Songs'
import { SundayServices } from './collections/SundayServices'
import { Testimonials } from './collections/Testimonials'
import { Worship } from './collections/Worship'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateMediaFileURL = ({
  filename: name,
  prefix,
}: {
  filename: string
  prefix?: string
}) => {
  const base = (process.env.NEXT_PUBLIC_MEDIA_URL || '').replace(/\/$/, '')
  return prefix ? `${base}/${prefix}/${name}` : `${base}/${name}`
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',

  email: resendAdapter({
    defaultFromAddress: 'info@domnaprobiv.com',
    defaultFromName: 'Дом на пробив',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  admin: {
    user: Users.slug,
    avatar: {
      Component: '@/components/admin/Avatar#default',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: { bg: 'Български', en: 'Bulgarian' }, code: 'bg' },
      { label: { bg: 'Английски', en: 'English' }, code: 'en' },
    ],
    defaultLocale: 'bg',
    fallback: true,
  },
  i18n: {
    fallbackLanguage: 'bg',
    supportedLanguages: { bg, en },
  },
  collections: [Users, Media, Ministries, Songs, SundayServices, Testimonials, Worship],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL?.replace(
          /sslmode=(prefer|require|verify-ca)/,
          'sslmode=verify-full',
        ) || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: { generateFileURL: generateMediaFileURL, disablePayloadAccessControl: true },
        songs: { generateFileURL: generateMediaFileURL, disablePayloadAccessControl: true },
        worship: { generateFileURL: generateMediaFileURL, disablePayloadAccessControl: true },
        'sunday-services': {
          generateFileURL: generateMediaFileURL,
          disablePayloadAccessControl: true,
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: process.env.S3_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION ?? 'auto',
        forcePathStyle: true,
      },
    }),
  ],
})
