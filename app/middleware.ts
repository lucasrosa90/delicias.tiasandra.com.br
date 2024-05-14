import NextAuth from 'next-auth'

import authConfig from './auth.config'
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from './routes'

const { auth } = NextAuth(authConfig)

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

export default auth(req => {
  const { nextUrl } = req
  const isLogged = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return void 0
  }

  if (isAuthRoute) {
    if (isLogged) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return void 0
  }

  if (!isLogged && !isPublicRoute) {
    let callback = nextUrl.pathname
    if (nextUrl.search) {
      callback += nextUrl.search
    }

    const encodedCallback = encodeURIComponent(callback)

    return Response.redirect(new URL(`/auth/login?${encodedCallback}`, nextUrl))
  }

  return void 0
})
