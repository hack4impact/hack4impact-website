import styles from './styles.module.scss';
import Container from '@components/shared/Container';

function Banner() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.b1}>
          <img src={'http://placekitten.com/g/1000/500'} alt="" className={styles.image} />
        </div>
        <div className={styles.b2} />
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
          <p>
            We envision a tech industry that emphasizes social impact as a core tenet of success. We
            hope to see similar Hack4Impact-type chapters opening up across the country both in
            academic institutions and professional communities. We envision more open-source
            projects, more university courses, and more academic research being poured into the
            intersection between social impact and software engineering. In addition, we envision
            Hack4Impact to be a space for socially-responsible organizations to turn to for
            resources and education.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Banner;
