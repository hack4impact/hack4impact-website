import Head from 'next/head';
import Header from '@components/shared/Header';
import Container from '@components/shared/Container';
import ProjectView from '@components/shared/Project';
import ChapterTable from '@components/work/ChapterTable';
import ChapterFeature from '@components/work/ChapterFeature';
import { exampleChapters, exampleProjects } from '@components/dummyData';
import fetchContent from '@utils/fetchContent';
import Project from '@utils/contentTypes/Project';
import Chapter from '@utils/contentTypes/Chapter';

type Props = {
  nationalInitiatives: Project[];
  chapters: Chapter[];
};

function Work({ nationalInitiatives, chapters }: Props) {
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
      <Container>
        <h2>Our Chapters</h2>
        <ChapterTable items={chapters}>
          {selectedItem => <ChapterFeature {...selectedItem} />}
        </ChapterTable>
      </Container>
    </main>
  );
}

export default Work;

export async function getStaticProps() {
  const projectQuery = `
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
  `;

  const { nationalInitiatives, chapters } = await fetchContent(`
  {
    nationalInitiatives: projectCollection(limit: 2, where: {type: "National Initiative"}) {
      ${projectQuery}
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
        projects: projectsCollection(limit: 2) {
          ${projectQuery}
        }
      }
    }
  }
  `);
  return {
    props: {
      nationalInitiatives: nationalInitiatives.items,
      chapters: chapters.items,
    },
  };
}
