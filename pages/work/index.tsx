import Head from 'next/head';
import Header from '@components/shared/Header';
import Container from '@components/shared/Container';
import Project from '@components/shared/Project';
import ChapterTable from '@components/work/ChapterTable';
import ChapterFeature from '@components/work/ChapterFeature';
import { exampleChapters, exampleProjects } from '@components/dummyData';

function Work() {
  return (
    <main>
      <Head>
        <title>Our Work</title>
      </Head>
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
