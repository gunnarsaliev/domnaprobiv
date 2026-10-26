// Public R2 bucket URL. Media files live only in R2 (see s3Storage plugin),
// so Payload's /api/<collection>/file/* route can't serve them.
const MEDIA_BASE_URL = (
  process.env.NEXT_PUBLIC_MEDIA_URL || 'https://pub-56cdfb9c5681437d80c80f64a6284773.r2.dev'
).replace(/\/$/, '')

export const mediaUrl = (filename: string) => `${MEDIA_BASE_URL}/${filename}`
