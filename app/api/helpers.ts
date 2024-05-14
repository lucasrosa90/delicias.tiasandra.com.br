import { createServerSideHelpers } from '@trpc/react-query/server'

import { CustomSuperJSON } from '../../lib/utils/superjson.custom'

import { appRouter } from './routers/_app'
import { createContext } from './trpc/context'

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: CustomSuperJSON,
    ctx: createContext(),
  })
