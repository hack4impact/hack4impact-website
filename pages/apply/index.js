import { useRouter } from 'next/router';
import Header from '../../components/shared/Header';
import ImageHighlight from '../../components/shared/ImageHighlight';
import Container from '../../components/shared/Container';
import Button from '../../components/shared/Button';
import styles from './styles.module.scss';
import classNames from 'classnames';
import FAQCell from '../../components/scoped/apply/FAQCell';
import Link from 'next/link';

const npRoute = '/apply/nonprofit';
const chRoute = '/apply/chapter';

const height = 200;
const width = 260;

const pretendImContentful1 = {
  requirements:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.  ',
  image: 'http://placekitten.com/g/1000/600',
  requirementLink: 'http://placekitten.com',
  faqTitle: 'Chapters FAQ',
  faq: [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    },
  ],
};

const pretendImContentful2 = {
  requirements:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.  ',
  image: 'http://placekitten.com/g/1000/600',
  requirementLink: 'http://placekitten.com',
  faqTitle: 'Nonprofits FAQ',
  faq: [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    },
  ],
};

function Apply() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const content = currentRoute === chRoute ? pretendImContentful1 : pretendImContentful2;
  return (
    <main>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <Link href={chRoute}>
            <a className={classNames({ [styles.selected]: currentRoute === chRoute })}>
              For New Chapters
            </a>
          </Link>
          <Link href={npRoute}>
            <a className={classNames({ [styles.selected]: currentRoute === npRoute })}>
              For Non Profits
            </a>
          </Link>
        </div>
      </Header>
      <div style={{ marginTop: 20 }}>
        <Container className="row spaced aligned wrap">
          <div className={styles.requirements}>
            <h2>{"What you'll need"}</h2>
            <p style={{ marginBottom: 40 }}>{content.requirements}</p>
            <Button href={content.requirementLink} external>
              Application Here
            </Button>
          </div>
          <div className={styles.image_wrap}>
            <ImageHighlight height={height} width={width}>
              <img src={content.image} alt="" style={{ height, width }} className={styles.image} />
            </ImageHighlight>
          </div>
        </Container>
        <Container>
          <h2>{content.faqTitle}</h2>
          {content.faq.map(item => (
            <FAQCell key={item.question} {...item} />
          ))}
        </Container>
      </div>
    </main>
  );
}

export default Apply;
