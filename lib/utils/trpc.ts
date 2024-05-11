import {
  createTRPCReact,
  createWSClient,
  httpBatchLink,
  inferReactQueryProcedureOptions,
  loggerLink,
  splitLink,
  wsLink,
} from '@trpc/react-query'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

import type { AppRouter } from '@/server/routers/_app'

import { CustomSuperJSON } from './superjson.custom'

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

export const trpc = createTRPCReact<AppRouter>()

export const trpcClient = trpc.createClient({
  links: [
    loggerLink({
      enabled() {
        // return process.env.NODE_ENV === 'development' &&
        //   typeof window !== 'undefined') ||
        // (opts.direction === 'down' && opts.result instanceof Error),
        // return process.env.NODE_ENV === 'development';
        return true
      },
    }),
    splitLink({
      condition(op) {
        return op.type !== 'subscription'
      },
      true: httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`,
        transformer: CustomSuperJSON,

        // When sending batch requests, sometimes the URL can become too large causing HTTP errors like
        // maxURLLength: 2083, // a suitable size
        // alternatively, you can make all RPC-calls to be called with POST
        // methodOverride: 'POST',
      }),
      false: wsLink({
        client: createWSClient({
          url: `${process.env.NEXT_PUBLIC_NESTJS_SERVER}/trpc`,
        }),
        transformer: CustomSuperJSON,
      }),
    }),
  ],
})
