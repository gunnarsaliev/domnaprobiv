'use client'

import { useRowLabel } from '@payloadcms/ui'

export const ChapterRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ title?: string }>()
  const n = (rowNumber ?? 0) + 1
  return <span>{data?.title ? `${n}. ${data.title}` : `${n}.`}</span>
}
