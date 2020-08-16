import Head from 'next/head';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from './styles.module.scss';


const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <main>
      <h1 className={styles.heading}>Wowee wow it's Hack4Impact 🥳</h1>
      <Button href="/">Get Involved</Button>
    </main>
  </>
)

export default Home
