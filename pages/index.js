import Head from 'next/head'
import styled from 'styled-components'

const Heading = styled.h1`
  text-align: center;
  color: red;
`

const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <header></header>
    <main>
      <Heading>Wowee wow it's Hack4Impact 🥳</Heading>
    </main>
    <footer></footer>
  </>
)

export default Home
