import styles from './styles.module.scss';
import Container from '@components/shared/Container';

function Banner() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.b1}>
          <img src={'images/uiuc-group.jpg'} alt="UIUC chapter group" />
        </div>
        <div className={styles.b2}>
          <img
            src={'images/bog-medshare.jpg'}
            alt="Bits of Good (Georgia Tech chapter) members volunteering at Medshare"
          />
        </div>
      </div>
      <Container>
        <h2>Our Mission</h2>
        <div className={styles.mission}>
          <p>
          To empower engineers, designers, activists, and humanitarians to create lasting and impactful social change, fostering the wider adoption of software as a tool for social good.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Banner;
