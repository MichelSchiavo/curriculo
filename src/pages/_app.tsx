import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
