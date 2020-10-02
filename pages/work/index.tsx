import Head from 'next/head';
import Header from '@components/shared/Header';
import Container from '@components/shared/Container';
import ProjectView from '@components/shared/Project';
import ChapterTable from '@components/work/ChapterTable';
import ChapterFeature from '@components/work/ChapterFeature';
import StaggerAnimOnScroll, { StaggerItem } from '@components/shared/StaggerAnimOnScroll';
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
        <StaggerAnimOnScroll>
          {nationalInitiatives.map(item => (
            <StaggerItem key={item.name}>
              <ProjectView {...item} />
            </StaggerItem>
          ))}
        </StaggerAnimOnScroll>
      </Container>
      <Container>
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
    chapters: chapterCollection(order: establishedDate_ASC) {
      items {
        universityLogo {
          url
          description
        }
        name
        location
        establishedDate
        incubating
        email
        websiteLink
        socialMediaLink
        socialMediaLinkType
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
  const chaptersWithFormattedDate = chapters.items.map(chapter => {
    const date = new Date(chapter.establishedDate);
    const year = date.getUTCFullYear();
    const semester = date.getUTCMonth() >= 6 ? 'Fall' : 'Spring';
    return {
      ...chapter,
      establishedDate: `${semester} ${year}`,
    };
  });

  return {
    props: {
      nationalInitiatives: nationalInitiatives.items,
      chapters: chaptersWithFormattedDate,
    },
  };
}
