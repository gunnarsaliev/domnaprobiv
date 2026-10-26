import { getPayload, type Payload } from 'payload'
import config from '@payload-config'
import type { Seminar } from '@/payload-types'
import type { SeminarLocale } from './labels'

export type PublicSeminar = Seminar & { speakerNames: string[] }

// Users aren't publicly readable, so speakers are resolved here with an admin
// query limited to `name`. Emails and other user fields never reach the page.
async function withSpeakerNames(payload: Payload, seminars: Seminar[]): Promise<PublicSeminar[]> {
  const speakerId = (s: number | { id: number }) => (typeof s === 'object' ? s.id : s)
  const ids = [...new Set(seminars.flatMap((s) => (s.speakers ?? []).map(speakerId)))]

  const names = new Map<number, string>()
  if (ids.length > 0) {
    const { docs } = await payload.find({
      collection: 'users',
      where: { id: { in: ids } },
      select: { name: true },
      depth: 0,
      limit: ids.length,
      pagination: false,
    })
    for (const user of docs) if (user.name) names.set(user.id, user.name)
  }

  return seminars.map((seminar) => ({
    ...seminar,
    speakerNames: (seminar.speakers ?? [])
      .map((s) => names.get(speakerId(s)))
      .filter((name): name is string => Boolean(name)),
  }))
}

// No user is passed, so with overrideAccess: false only published seminars are returned.
export async function listSeminars(locale: SeminarLocale) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'seminars',
    locale,
    fallbackLocale: 'bg',
    draft: false,
    overrideAccess: false,
    depth: 0,
    sort: '-createdAt',
    limit: 100,
  })
  return withSpeakerNames(payload, docs)
}

export async function getSeminarBySlug(slug: string, locale: SeminarLocale) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'seminars',
    where: { slug: { equals: slug } },
    locale,
    fallbackLocale: 'bg',
    draft: false,
    overrideAccess: false,
    depth: 0,
    limit: 1,
  })
  const [seminar] = await withSpeakerNames(payload, docs)
  return seminar ?? null
}

// Chapters are addressed by their 1-based position; returns null when out of range.
export function getChapterIndex(seminar: Seminar, chapterParam: string): number | null {
  if (!/^\d+$/.test(chapterParam)) return null
  const index = Number(chapterParam) - 1
  return index >= 0 && index < seminar.chapters.length ? index : null
}
