import LinkButton from '@components/shared/LinkButton';
import Container from '@components/shared/Container';
import styles from './styles.module.scss';
import AnimatedRole from './AnimatedRole';

function Hero() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span className={styles.subheader}>We are</span>
            <AnimatedRole />
            <span>for social change</span>
          </h1>
          <p>
            We create lasting and impactful <strong>software for nonprofits</strong>, fostering the
            adoption of technology for social good
          </p>
          <LinkButton className={styles.cta} href="apply/nonprofit">
            Work With Us
          </LinkButton>
        </div>
        <div className={styles.image_container}>
          <img
            width="450"
            height="450"
            src="/images/bog-stone-mountain.jpg"
            alt="Bits of Good having a good time climbing Stone Mountain in Atlanta"
          />
        </div>
      </Container>
      <div className={styles.background}>
        <div className={styles.b1} />
        <div className={styles.b2} />
        <div className={styles.b3} />
      </div>
    </div>
  );
}

export default Hero;
