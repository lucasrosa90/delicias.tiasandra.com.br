import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { createContext } from '../../context'
import { appRouter } from '../../routers/_app'

const handler = (req: Request, res: Response) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext({ req, res }),
  })

export { handler as GET, handler as POST }
