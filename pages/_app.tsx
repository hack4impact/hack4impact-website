import '@reach/dialog/styles.css';
import '../global.scss';
import PropTypes, { element, object } from 'prop-types';
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import { Component } from 'react';

interface Props {
  Component: any;
  pageProps: object;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps } : Props) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
