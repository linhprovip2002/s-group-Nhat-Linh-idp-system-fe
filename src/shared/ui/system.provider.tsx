import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren, ReactElement, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { store, getQueryClientConfig, chakraTheme } from '../config';

type SystemPropsAdapter = PropsWithChildren<{}> & {
  pageProps: AppProps['pageProps'];
};

export function SystemProvider({
  children,
  pageProps
}: SystemPropsAdapter): ReactElement {
  const [queryClient] = useState(
    () => new QueryClient(getQueryClientConfig({}))
  );

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>{children}</Provider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
