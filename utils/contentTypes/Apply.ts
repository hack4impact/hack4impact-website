import { ServerStreamFileResponseOptionsWithError } from 'http2';
import { Collection, Image, RichText } from './generic';

type FAQ = {
  question: string;
  answer: RichText;
};

type ApplicationPage = {
  applicationType: string;
  photo: Image;
  applicationLink: string;
  description: RichText;
  faqsCollection: Collection<FAQ>;
};

export default ApplicationPage;
