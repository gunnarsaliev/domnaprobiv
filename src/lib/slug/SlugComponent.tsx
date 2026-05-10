'use client'

import { useCallback, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useField, useFormFields, Button, TextInput, FieldLabel } from '@payloadcms/ui'
import type { TextFieldClientProps } from 'payload'
import slugify from 'slugify'

type SlugComponentProps = TextFieldClientProps & {
  fieldToUse: string
}

const toSlug = (val: string): string => slugify(val, { lower: true, strict: true })

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const UnlockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
)

export const SlugComponent: React.FC<SlugComponentProps> = ({ field, fieldToUse, path }) => {
  const [isLocked, setIsLocked] = useState(true)

  const { value: slugValue, setValue: setSlugValue } = useField<string>({ path: path || 'slug' })

  const sourceValue = useFormFields(([fields]) => {
    const f = fields[fieldToUse]
    return f && 'value' in f ? (f.value as string) : ''
  })

  useEffect(() => {
    if (isLocked && sourceValue) {
      setSlugValue(toSlug(sourceValue))
    }
  }, [isLocked, sourceValue, setSlugValue])

  const handleLockToggle = useCallback(() => {
    setIsLocked((prev) => !prev)
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <FieldLabel label={field?.label ?? 'Slug'} />
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <TextInput
          value={slugValue ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!isLocked) setSlugValue(e.target.value)
          }}
          readOnly={isLocked}
          path={path || 'slug'}
          style={{ flex: 1 }}
        />
        <Button
          buttonStyle="icon-label"
          icon={isLocked ? <LockIcon /> : <UnlockIcon />}
          onClick={handleLockToggle}
          tooltip={isLocked ? 'Unlock slug' : 'Lock slug'}
          size="small"
        />
      </div>
    </div>
  )
}
