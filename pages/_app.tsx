import { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import '@styles/globals.css';

type Props = {
  children: ReactNode;
};

function Noop({ children }: Props) {
  return <>{children}</>;
}

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: ReactNode } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
