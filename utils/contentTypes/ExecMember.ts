import { Document } from '@contentful/rich-text-types';

type ExecMember = {
  name: string;
  title: string;
  description: {
    json: Document;
  };
  photo: {
    url: string;
  };
  linkedIn: string;
};

export default ExecMember;
