import { Collection, Image, RichText } from './generic';

export type FAQ = {
  question: string;
  answer: RichText;
};

export type ApplicationPage = {
  applicationType: 'New Chapters' | 'Nonprofits';
  headerTitle: string;
  photo: Image;
  applicationLink: string;
  description: RichText;
  faqsCollection: Collection<FAQ>;
};
