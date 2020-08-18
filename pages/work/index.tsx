import Header from '../../components/shared/Header';
import Container from '../../components/shared/Container';
import Project from '../../components/shared/Project';
import ChapterTable from '../../components/scoped/work/ChapterTable';
import ChapterFeature from '../../components/scoped/work/ChapterFeature';
import { exampleChapters, exampleProjects } from './dummyData';

function Work() {
  return (
    <main>
      <Header title="Our Work" />
      <Container>
        <h2>National Initiatives</h2>
        {exampleProjects.map(item => (
          <Project key={item.title} {...item} />
        ))}
      </Container>
      <Container>
        <h2>Our Chapters</h2>
        <ChapterTable items={exampleChapters}>
          {selectedItem => <ChapterFeature {...selectedItem} />}
        </ChapterTable>
      </Container>
    </main>
  );
}

export default Work;
