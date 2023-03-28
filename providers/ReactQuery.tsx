'use client'

import {
  QueryClient,
  QueryClientProvider,
  type QueryFunctionContext,
} from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }: QueryFunctionContext) => await (await fetch(queryKey.join(''))).json(),
    }
  }
})

interface IProps {
children: React.ReactNode
}

export default function Provider({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
