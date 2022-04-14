import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import 'antd/dist/antd.variable.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp
