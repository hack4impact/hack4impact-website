import Head from 'next/head';
import Button from '../../components/Button';
import Team from '../../components/Team';
import ChapterTable from '../../components/ChapterTable';
import styles from './styles.module.scss';
import Container from '../../components/Container';

function ExampleComponent({ name }) {
  return (
    <h1>{name}</h1>
  )
}

const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <main>
      <Container>
        <h2>Our Chapters</h2>
        <ChapterTable
          items={[
            {
              logoUrl: 'http://placekitten.com/g/100/100',
              name: 'Kitten Tech',
            },
            {
              logoUrl: 'http://placekitten.com/g/100/100',
              name: 'Kitten U',
            },
            {
              logoUrl: 'http://placekitten.com/g/100/100',
              name: 'UIUK',
            },
            {
              logoUrl: 'http://placekitten.com/g/100/100',
              name: 'Kittenford',
            }
          ]}>
            <ExampleComponent />
        </ChapterTable>
      </Container>
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
