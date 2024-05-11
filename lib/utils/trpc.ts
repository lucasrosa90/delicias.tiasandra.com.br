import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'

import type { AppRouter } from '@/server/routers/_app'

import { CustomSuperJSON } from './superjson.custom'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''

  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>()
// export const trpc = createTRPCNext<AppRouter>({
//   config(opts) {
//     return {
//       // transformer: CustomSuperJSON,
//       links: [
//         httpBatchLink({
//           transformer: CustomSuperJSON,
//           url: `${getBaseUrl()}/api/trpc`,
//           async headers() {
//             return {
//               // authorization: getAuthCookie(),
//             };
//           },
//         }),
//       ],
//     };
//   },
//   ssr: false,
// });