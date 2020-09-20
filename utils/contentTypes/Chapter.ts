import { Image } from './generic';
import Project from './Project';

export type ProjectType = 'National Initiative' | 'Chapter Project';

type Chapter = {
  universityLogo: Image;
  name: string;
  location: string;
  email: string;
  websiteLink: string;
  socialMediaLink: string;
  codeRepoLink: string;
  photo: Image;
  projects: {
    items: Project[];
  };
};

export default Chapter;
