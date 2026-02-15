import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
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

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
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
        media: true,
        songs: true,
        worship: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: process.env.S3_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
        forcePathStyle: true,
      },
    }),
  ],
})
