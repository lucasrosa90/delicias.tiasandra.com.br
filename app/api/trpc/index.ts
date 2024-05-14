import { initTRPC } from '@trpc/server'

import { CustomSuperJSON } from '@/utils/superjson.custom'

import { Context } from './context'

export const t = initTRPC.context<Context>().create({
  transformer: CustomSuperJSON,
  errorFormatter({ shape }) {
    // Customize the error format if necessary
    return shape // Default error shaping
  },
})

export const router = t.router
export const procedure = t.procedure

// export const adminProcedure = t.procedure.use(() => {
//   // export default async (req, res) => {
//   //   const session = await getServerSession(req, res, authOptions)
//   //   if (session) {
//   //     res.send({
//   //       content:
//   //         "This is protected content. You can access this content because you are signed in.",
//   //     })
//   //   } else {
//   //     res.send({
//   //       error: "You must be signed in to view the protected content on this page.",
//   //     })
//   //   }
// })
