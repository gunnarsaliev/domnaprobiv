'use client'

import { useAuth } from '@payloadcms/ui'
import type { User } from '../../payload-types'

export default function Avatar() {
  const { user } = useAuth<User>()
  const image = user?.image

  if (image && typeof image === 'object' && image.url) {
    return (
      <img
        src={image.url}
        alt={image.alt || user?.email || ''}
        style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
      />
    )
  }

  return null
}
