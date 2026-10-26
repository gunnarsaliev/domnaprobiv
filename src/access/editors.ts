import type { Access } from 'payload'

const EDITOR_ROLES = ['super-admin', 'admin', 'editor']

export const editors: Access = ({ req: { user } }) =>
  Boolean(user && EDITOR_ROLES.includes(user.roles))
