import Head from 'next/head';
import PropTypes from 'prop-types';
import { FaNetworkWired } from 'react-icons/fa';
import styles from './styles.module.scss';
import Team from '../../components/Team';
import ChapterTable from '../../components/ChapterTable';
import Container from '../../components/Container';
import Project from '../../components/Project';
import Card from '../../components/Card';

function ExampleComponent({ name }) {
  return <h1>{name}</h1>;
}

ExampleComponent.propTypes = {
  name: PropTypes.string,
};

const ExampleProjects = [
  {
    image: 'http://placekitten.com/g/1000/600',
    title: 'Website',
    tags: ['Kitten', 'Kat', 'Kitty Kat Kat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    link: 'https://www.w3schools.com/',
  },
  {
    image: 'http://placekitten.com/g/1000/600',
    title: 'Website',
    tags: [
      'Kitten',
      'Kat',
      'Kitty Kat Kat',
      'Kitten',
      'Kat',
      'Kitty Kat Kat',
      'Kitten',
      'Kat',
      'Kitty Kat Kat',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    link: 'https://www.w3schools.com/',
  },
];

const Home = () => (
  <>
    <Head>
      <title>Hack4Impact Home</title>
    </Head>
    <main>
      <Container>
        <h2>Our Initiatives</h2>
        <div className={styles.card_row}>
          <Card
            title="Chapter Network"
            subtitle="WE MENTOR"
            description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
            href="/work"
            buttonTitle="Current Chapters">
            <FaNetworkWired />
          </Card>
          <Card
            title="Chapter Network"
            subtitle="WE MENTOR"
            description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
            href="/work"
            buttonTitle="Current Chapters">
            <FaNetworkWired />
          </Card>
          <Card
            title="Chapter Network"
            subtitle="WE MENTOR"
            description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
            href="/work"
            buttonTitle="Current Chapters">
            <FaNetworkWired />
          </Card>
        </div>
      </Container>
      <Container>
        <h2>Featured Projects</h2>
        {ExampleProjects.map(item => (
          <Project key={item.title} {...item} />
        ))}
      </Container>
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
            },
          ]}>
          {selectedItem => <ExampleComponent {...selectedItem} />}
        </ChapterTable>
      </Container>
      <Team
        items={[
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
            description:
              'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'https://www.w3schools.com/',
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
            description:
              'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'https://www.w3schools.com/',
            linkedin: 'https://www.w3schools.com/',
          },
          {
            image: 'http://placekitten.com/g/300/300',
            name: 'Kitten Yang',
            role: 'Principal Meow',
            description:
              'Optional Description. Not everyone will have one, but some will. This is just like Hack4Impact’s current website!',
            email: 'https://www.w3schools.com/',
            linkedin: 'https://www.w3schools.com/',
            github: 'https://www.w3schools.com/',
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
);

export default Home;
