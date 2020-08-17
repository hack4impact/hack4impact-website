import '@reach/dialog/styles.css';
import '../global.scss';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
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
