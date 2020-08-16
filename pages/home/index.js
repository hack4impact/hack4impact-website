import Head from 'next/head';
import Button from '../../components/Button';
import Team from '../../components/Team';
import styles from './styles.module.scss';


const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <main>
      <h1 className={styles.heading}>Wowee wow it's Hack4Impact 🥳</h1>
      <Team
        items={[
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
            description: 'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'www.google.com',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
            description: 'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'www.google.com',
            linkedin: 'www.google.com',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
            description: 'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'www.google.com',
            linkedin: 'www.google.com',
            github: 'www.google.com',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
          },
        ]}
        infinite
      />
    </main>
  </>
)

export default Home
