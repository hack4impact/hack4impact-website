import fetchContent from '@utils/fetchContent';
import Page from '@components/apply';

export async function getStaticProps() {
  const { chapterApplication } = await fetchContent(`
  {
    chapterApplication: applicationPageCollection(limit: 1, where: {applicationType: "New Chapters"}) {
      items {
        applicationType
        headerTitle
        photo {
          url
        }
        applicationLink
        description {
          json
        }
        faqsCollection {
          items {
            question
            answer {
              json
            }
          }
        }
      }
    }
  }
  `);
  return {
    props: {
      content: chapterApplication?.items[0],
    },
  };
}

export default Page;
