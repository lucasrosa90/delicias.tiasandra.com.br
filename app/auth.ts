import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import prisma from './api/prisma'
import authConfig from './auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  callbacks: {
    async session({ token, session }) {
      console.log('session', token, session)
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role
      }

      return session
    },

    async jwt({ token }) {
      console.log('jwt', token)

      if (!token.sub) {
        return token
      }

      const existingUser = await prisma.user.findUnique({ where: { id: token.sub } })
      if (!existingUser) {
        return token
      }

      token.role = existingUser.role

      return token
    },

    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn', user, account, profile, email, credentials)
      const existingUser = await prisma.user.findUnique({ where: { id: user.id } })

      // if (!existingUser || !existingUser.emailVerified) {
      //   return false
      // }

      if (existingUser && existingUser.isTwoFactorEnabled) {
        // getTwoFactorConfirmation
        return false
      }

      return true
    },
  },

  events: {
    async linkAccount({ user, account, profile }) {
      console.log('linkAccount', user, account, profile)
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      })
    },

    async createUser({ user }) {
      console.log('createUser', user)
    },
  },

  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: null,
  },

  ...authConfig,
})
