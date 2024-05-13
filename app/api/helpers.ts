import { createServerSideHelpers } from '@trpc/react-query/server'

import { CustomSuperJSON } from '../../lib/utils/superjson.custom'

import { createContext } from './context'
import { appRouter } from './routers/_app'

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: CustomSuperJSON,
    ctx: createContext(),
  })
