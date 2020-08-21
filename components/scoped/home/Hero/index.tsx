import Button from '../../../shared/Button';
import Container from '../../../shared/Container';
import styles from './styles.module.scss';

function Hero() {
  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span className={styles.subheader}>We are</span>
            <span className={styles.role_name}>Designers</span>
            <span>for social change</span>
          </h1>
          <p>
            We create lasting and impactful social change, fostering the adoption of software as a
            tool for social good.
          </p>
          <Button href="apply/nonprofit">Get involved</Button>
        </div>
        <div className={styles.image_container}>
          <img
            width="450"
            height="450"
            src="http://placekitten.com/g/600/600"
            alt="A very cute kitty"
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
