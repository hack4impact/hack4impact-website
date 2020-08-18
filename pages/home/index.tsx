import Head from 'next/head';
import { FaNetworkWired } from 'react-icons/fa';
import styles from './styles.module.scss';
import Container from '../../components/shared/Container';
import Project from '../../components/shared/Project';
import Card from '../../components/scoped/home/Card';
import Button from '../../components/shared/Button';

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

function Home() {
  return (
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
              subtitle="We mentor"
              description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
              href="/work"
              buttonTitle="Current Chapters">
              <FaNetworkWired />
            </Card>
            <Card
              title="Pro-bono Projects"
              subtitle="We build"
              description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
              href="/work"
              buttonTitle="Current Projects">
              <FaNetworkWired />
            </Card>
            <Card
              title="Chapter Resources"
              subtitle="We share"
              description="We help new chapters out by providing a way to talk to other chapters internationally and other resources to get started"
              href="/apply/chapter"
              buttonTitle="Apply to the Team">
              <FaNetworkWired />
            </Card>
          </div>
        </Container>
        <Container>
          <h2>Featured Projects</h2>
          {ExampleProjects.map(item => (
            <Project key={item.title} {...item} />
          ))}
          <div className={styles.button_row}>
            <Button href="/work">See all chapters</Button>
            <Button href="/apply/nonprofit" type="secondary">
              Propose your nonprofit project
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;
