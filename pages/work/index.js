import Header from '../../components/Header';
import Container from '../../components/Container';
import Project from '../../components/Project';
import ChapterTable from '../../components/ChapterTable';
import ChapterFeature from '../../components/ChapterFeature';

const exampleProjects = [
  {
    image: 'http://placekitten.com/g/1000/600',
    title: 'Website',
    tags: ['Kitten', 'Kat', 'Kitty Kat Kat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    link: 'https://www.w3schools.com/',
  },
  {
    image: 'http://placekitten.com/g/1000/600',
    title: 'Website',
    tags: ['Kitten', 'Kat', 'Kitty Kat Kat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
    link: 'https://www.w3schools.com/',
  },
];

const exampleChapters = [
  {
    logoUrl: 'http://placekitten.com/g/100/100',
    name: 'Kitten Tech',
    image: 'http://placekitten.com/g/300/250',
    description:
      'The Nationals Board is still looking for sponsors (sike)! Interested in helping us out! Please contact us. (pls idk what to say)',
    link: 'https://www.w3schools.com/',
    team: [
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
    ],
    projects: exampleProjects,
  },
  {
    logoUrl: 'http://placekitten.com/g/100/100',
    name: 'Kitten U',
    image: 'http://placekitten.com/g/400/300',
    description:
      'The Nationals Board is still looking for sponsors (sike)! Interested in helping us out! Please contact us. (pls idk what to say)',
    link: 'https://www.w3schools.com/',
    team: [
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
    ],
    projects: exampleProjects,
  },
  {
    logoUrl: 'http://placekitten.com/g/100/100',
    name: 'UIUK',
    image: 'http://placekitten.com/g/300/300',
    description:
      'The Nationals Board is still looking for sponsors (sike)! Interested in helping us out! Please contact us. (pls idk what to say)',
    link: 'https://www.w3schools.com/',
    team: [
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
    ],
    projects: exampleProjects,
  },
  {
    logoUrl: 'http://placekitten.com/g/100/100',
    name: 'Kittenford',
    image: 'http://placekitten.com/g/400/250',
    description:
      'The Nationals Board is still looking for sponsors (sike)! Interested in helping us out! Please contact us. (pls idk what to say)',
    link: 'https://www.w3schools.com/',
    team: [
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
      {
        image: 'http://placekitten.com/g/300/300',
        name: 'Kitten Yang',
        role: 'Principal Meow',
      },
    ],
    projects: exampleProjects,
  },
];

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
