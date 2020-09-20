import { Image, RichText } from './generic';

export type ProjectType = 'National Initiative' | 'Chapter Project';

type Project = {
  photo: Image;
  name: string;
  tags: string[];
  featuredOnHomePage?: boolean;
  type?: ProjectType;
  description: RichText;
  link: string;
};

export default Project;
