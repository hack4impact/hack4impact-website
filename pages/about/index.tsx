import Header from '../../components/shared/Header';
import Banner from '../../components/scoped/apply/Banner';
import Container from '../../components/shared/Container';

function About() {
  return (
    <main>
      <Header title="About" />
      <Banner />
      <Container>
        <h2>Our Mission</h2>
      </Container>
    </main>
  );
}

export default About;
