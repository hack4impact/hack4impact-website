import Head from 'next/head';
import Header from '@components/shared/Header';
import Container from '@components/shared/Container';
import ProjectView from '@components/shared/Project';
import ChapterTable from '@components/work/ChapterTable';
import ChapterFeature from '@components/work/ChapterFeature';
import { exampleChapters, exampleProjects } from '@components/dummyData';
import fetchContent from '@utils/fetchContent';
import Project from '@utils/contentTypes/Project';

type Props = {
  nationalInitiatives: Project[];
};

function Work({ nationalInitiatives }: Props) {
  return (
    <main>
      <Head>
        <title>Our Work</title>
      </Head>
      <Header title="Our Work" />
      <Container>
        <h2>National Initiatives</h2>
        {nationalInitiatives.map(item => (
          <ProjectView key={item.name} {...item} />
        ))}
      </Container>
      {/* <Container>
        <h2>Our Chapters</h2>
        <ChapterTable items={exampleChapters}>
          {selectedItem => <ChapterFeature {...selectedItem} />}
        </ChapterTable>
      </Container> */}
    </main>
  );
}

export default Work;

export async function getStaticProps() {
  const { nationalInitiatives, chapters } = await fetchContent(`
  {
    nationalInitiatives: projectCollection(where: {type: "National Initiative"}) {
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
        type
      }
    }
    chapters: chapterCollection {
      items {
        universityLogo {
          url
          description
        }
        name
        location
        email
        websiteLink
        socialMediaLink
        codeRepoLink
        photo {
          url
          description
        }
      }
    }
  }
  `);
  return {
    props: {
      nationalInitiatives: nationalInitiatives.items,
    },
  };
}
