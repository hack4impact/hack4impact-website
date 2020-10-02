import { Image, Collection } from './generic';
import Project from './Project';

export type ProjectType = 'National Initiative' | 'Chapter Project';

type Chapter = {
  universityLogo: Image;
  name: string;
  location: string;
  establishedDate: string;
  incubating: boolean;
  email: string;
  websiteLink?: string;
  socialMediaLink?: string;
  socialMediaLinkType?: string;
  codeRepoLink?: string;
  photo: Image;
  projects?: Collection<Project>;
};

export default Chapter;
