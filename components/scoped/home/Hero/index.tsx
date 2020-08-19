import Button from '../../../shared/Button';
import Accent from '../../../shared/Accent';
import Container from '../../../shared/Container';
import styles from './styles.module.scss';

function Hero() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            WE ARE
            <h1>
              <div>
                <b>Designers</b>
                <div className={styles.highlight} />
              </div>
              for social change
            </h1>
            <p>
              We create lasting and impactful social change, fostering the adoption of software as a
              tool for social good.
            </p>
          </div>
          <Button href="apply/nonprofit">Get involved</Button>
        </div>
        <div className={styles.image}>
          <Accent className={styles.accent1} />
          <Accent className={styles.accent2} />
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
