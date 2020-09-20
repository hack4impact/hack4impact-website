import Head from 'next/head';
import { FaNetworkWired } from 'react-icons/fa';
import styles from './styles.module.scss';
import Container from '@components/shared/Container';
import ProjectView from '@components/shared/Project';
import Card from '@components/home/Card';
import LinkButton from '@components/shared/LinkButton';
import Hero from '@components/home/Hero';
import fetchContent from '@utils/fetchContent';
import Project from '@utils/contentTypes/Project';

type Props = {
  featuredProjects: Project[];
};

function Home({ featuredProjects }: Props) {
  return (
    <main style={{ marginTop: 0 }}>
      <Head>
        <title>Hack4Impact</title>
      </Head>
      <Hero />
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
        {featuredProjects.map(item => (
          <ProjectView key={item.name} {...item} />
        ))}
        <div className={styles.button_row}>
          <LinkButton href="/work">See all chapters</LinkButton>
          <LinkButton href="/apply/nonprofit" type="secondary">
            Propose your nonprofit project
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}

export default Home;

export async function getStaticProps() {
  const { projectCollection } = await fetchContent(`
  {
    projectCollection(limit: 3, where: {featuredOnHomePage: true}) {
      items {
        photo {
          url
          description
        }
        name
        tags
        description {
          json
        }
        link
      }
    }
  }
  `);
  return {
    props: {
      featuredProjects: projectCollection.items,
    },
  };
}
