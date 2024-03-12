import '../styles/globals.scss';
import '../styles/typography.module.scss';
import { AppPropsWithLayout } from 'src/shared/model/next.types';
import { SystemProvider } from 'src/shared/ui/system.provider';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const renderLayout =
  //   Component.getLayout ?? (page => <AdminLayout>{page}</AdminLayout>);

  return (
    <SystemProvider pageProps={pageProps}>
      {/* {renderLayout(<Component {...pageProps} />)} */}
      {<Component {...pageProps} />}
    </SystemProvider>
  );
}

export default MyApp;
