import '@reach/dialog/styles.css';
import '../global.scss';
import Nav from '@components/shared/Nav';
import Footer from '@components/shared/Footer';
import { AppProps } from 'next/app';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
