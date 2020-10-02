import Head from 'next/head';
import Header from '@components/shared/Header';
import ImageHighlight from '@components/shared/ImageHighlight';
import Container from '@components/shared/Container';
import LinkButton from '@components/shared/LinkButton';
import StaggerAnimOnScroll, { StaggerItem } from '@components/shared/StaggerAnimOnScroll';
import styles from './styles.module.scss';
import classNames from 'classnames';
import FAQCell from '@components/apply/FAQCell';
import Link from 'next/link';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';
import { ApplicationPage } from '@utils/contentTypes/Apply';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';

type Props = {
  content: ApplicationPage;
};

function Apply({ content }: Props) {
  return (
    <main>
      <Head>
        <title>Join Us</title>
      </Head>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <Link href="/apply/chapter">
            <a
              className={classNames({
                [styles.selected]: content.applicationType === 'New Chapters',
              })}>
              For New Chapters
              <HoverShinyEffect />
            </a>
          </Link>
          <Link href="/apply/nonprofit">
            <a
              className={classNames({
                [styles.selected]: content.applicationType === 'Nonprofits',
              })}>
              For Non Profits
              <HoverShinyEffect />
            </a>
          </Link>
        </div>
      </Header>
      <div style={{ marginTop: 20 }}>
        <Container className="row spaced aligned wrap">
          <div className={styles.requirements}>
            <h2>{content.headerTitle}</h2>
            <div
              style={{ marginBottom: 40 }}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content.description.json),
              }}
            />
            <LinkButton href={content.applicationLink} className={styles.link_button} external>
              Apply Here
              <ArrowIcon />
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
          <StaggerAnimOnScroll>
            {content.faqsCollection.items.map(({ question, answer }) => (
              <StaggerItem key={`${content.applicationType}-${question}`}>
                <FAQCell question={question} answer={answer} />
              </StaggerItem>
            ))}
          </StaggerAnimOnScroll>
        </Container>
      </div>
    </main>
  );
}

export default Apply;
