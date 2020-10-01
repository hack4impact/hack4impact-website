import fetchContent from '@utils/fetchContent';
import Page from '@components/apply';

export async function getStaticProps() {
  const { nonprofitApplication } = await fetchContent(`
  {
    nonprofitApplication: applicationPageCollection(limit: 1, where: {applicationType: "Nonprofits"}) {
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
      content: nonprofitApplication?.items[0],
    },
  };
}

export default Page;
