// eslint-disable-next-line
import { JWT } from '@auth/core/jwt'
import { UserRole } from '@prisma/client'
import { DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

declare module '@auth/core/jwt' {
  // eslint-disable-next-line
  interface JWT {
    role: UserRole
  }
}
