import Head from 'next/head';
import Header from '@components/shared/Header';
import Banner from '@components/about/Banner';
import fetchContent from '@utils/fetchContent';
import ExecMember from '@utils/contentTypes/ExecMember';
import ExecBoard from '@components/about/ExecBoard';
import Values from '@components/about/Values';

type Props = {
  execMembers: ExecMember[];
};

export async function getStaticProps() {
  const { executiveBoardMemberCollection } = await fetchContent(`
  {
    executiveBoardMemberCollection(order: title_DESC) {
      items {
        name
        title
        description {
          json
        }
        photo {
          url
        }
        linkedIn
        email
      }
    }
  }
  `);
  return {
    props: {
      execMembers: executiveBoardMemberCollection.items,
    },
  };
}

function About({ execMembers }: Props) {
  return (
    <main>
      <Head>
        <title>About Us</title>
      </Head>
      <Header title="About" />
      <Banner />
      <Values />
      <ExecBoard execMembers={execMembers} />
    </main>
  );
}

export default About;
