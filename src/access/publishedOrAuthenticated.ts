import type { Access } from 'payload'

// Logged-in users see drafts; the public only sees published documents.
export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}
