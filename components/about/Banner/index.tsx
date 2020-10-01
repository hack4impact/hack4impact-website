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
            Hack4Impact exists for both nonprofits and students. We connect student software
            developers with nonprofits and other socially responsible businesses to develop powerful
            new tools for social change. This enables nonprofits to further their mission and better
            engage their clients. We are committed to increasing awareness of technology’s potential
            for good. We host speaker events and develop workshops for students, open to the entire
            university community.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Banner;
