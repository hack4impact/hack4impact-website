import Header from '../../components/shared/Header';
import Banner from '../../components/scoped/about/Banner';
import Container from '../../components/shared/Container';
import styles from './styles.module.scss';
import Team from '../../components/shared/Team';

import { exampleChapters } from '../work/dummyData';

function About() {
  return (
    <main>
      <Header title="About" />
      <Banner />
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
      <section style={{ marginBottom: 100 }}>
        <h2 className="contain">Our Team</h2>
        <Team items={exampleChapters[0].team} infinite />
      </section>
      <Container>
        <h2>Our Affiliations</h2>
        <div className="row wrap">
          <img src="http://placekitten.com/g/300/100" alt="" className={styles.affiliation} />
          <img src="http://placekitten.com/g/300/100" alt="" className={styles.affiliation} />
        </div>
      </Container>
      <Container>
        <h2>Similar Organizations</h2>
        <p>
          Hack4Impact is unique, but our values certainly aren’t. We’re one of dozens of university
          clubs, hackathons, and nonprofits focusing on using technology for social good. Here are
          just a few.
        </p>
        <ul className={styles.orgs}>
          <li>
            <a href="/">Cal Blueprint</a> (UC Berkley)
          </li>
          <li>
            <a href="/">Cal Blueprint</a> (UC Berkley)
          </li>
          <li>
            <a href="/">Cal Blueprint</a> (UC Berkley)
          </li>
          <li>
            <a href="/">Cal Blueprint</a> (UC Berkley)
          </li>
        </ul>
      </Container>
    </main>
  );
}

export default About;
