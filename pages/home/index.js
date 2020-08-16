import Head from 'next/head'
import styles from './styles.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <header></header>
    <main>
      <h1 className={styles.heading}>Wowee wow it's Hack4Impact 🥳</h1>
    </main>
    <footer></footer>
  </>
)

export default Home
