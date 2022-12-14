import '../styles/globals.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from "../components/Layout/Layout";
import type { AppProps } from 'next/app';
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient)

  return (
      <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </Hydrate>
          {/*<ReactQueryDevtools />*/}
      </QueryClientProvider>
  )


}
