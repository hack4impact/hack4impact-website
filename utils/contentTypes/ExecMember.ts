import { Image, RichText } from './generic';

type ExecMember = {
  name: string;
  title: string;
  description: RichText;
  photo: Image;
  linkedIn?: string;
  email?: string;
};

export default ExecMember;
