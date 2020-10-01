import Head from 'next/head';
import Header from '@components/shared/Header';
import ImageHighlight from '@components/shared/ImageHighlight';
import Container from '@components/shared/Container';
import LinkButton from '@components/shared/LinkButton';
import styles from './styles.module.scss';
import classNames from 'classnames';
import FAQCell from '@components/apply/FAQCell';
import Link from 'next/link';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';
import fetchContent from '@utils/fetchContent';
import ApplicationPage from '@utils/contentTypes/Apply';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Props = {
  applicationPages: ApplicationPage[];
  applicationType: 'chapter' | 'nonprofit';
};

function Apply({ applicationPages, applicationType }: Props) {
  const content = applicationPages.find(x => {
    if (applicationType === 'chapter') {
      return x.applicationType === 'New Chapters';
    } else {
      return x.applicationType === 'Nonprofits';
    }
  });
  return (
    <main>
      <Head>
        <title>Join Us</title>
      </Head>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <Link href="/apply/[applicationType]" as="/apply/chapter">
            <a className={classNames({ [styles.selected]: applicationType === 'chapter' })}>
              For New Chapters
              <HoverShinyEffect />
            </a>
          </Link>
          <Link href="/apply/[applicationType]" as="/apply/nonprofit">
            <a className={classNames({ [styles.selected]: applicationType === 'nonprofit' })}>
              For Non Profits
              <HoverShinyEffect />
            </a>
          </Link>
        </div>
      </Header>
      <div style={{ marginTop: 20 }}>
        <Container className="row spaced aligned wrap">
          <div className={styles.requirements}>
            <h2>{"What you'll need"}</h2>
            <div
              style={{ marginBottom: 40 }}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content.description.json),
              }}
            />
            <LinkButton href={content.applicationLink} className={styles.link_button} external>
              Application Here
            </LinkButton>
          </div>
          <div className={styles.image_wrap}>
            <ImageHighlight
              src={content.photo.url}
              alt=""
              width="400"
              height="300"
              className={styles.image}
            />
          </div>
        </Container>
        <Container>
          <h2>FAQs</h2>
          {content.faqsCollection.items.map(({ question, answer }) => (
            <FAQCell key={question} question={question} answer={answer} />
          ))}
        </Container>
      </div>
    </main>
  );
}

export default Apply;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { applicationType: 'chapter' } },
      { params: { applicationType: 'nonprofit' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { applicationType } }) {
  const { applicationPageCollection } = await fetchContent(`
  {
    applicationPageCollection {
      items {
        applicationType
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
      applicationPages: applicationPageCollection.items,
      applicationType,
    },
  };
}
