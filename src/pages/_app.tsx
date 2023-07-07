import AppProvider from '@/providers/appProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page); // Using the coalescing operator the getLayout variable will be assigned the Component.getLayout function or (page => page) as long as Component.getLayout is not null or undefined

  const pageContent = getLayout(<Component {...pageProps} />);
  return <AppProvider>{pageContent}</AppProvider>;
}
