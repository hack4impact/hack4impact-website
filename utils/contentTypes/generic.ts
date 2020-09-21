import { Document } from '@contentful/rich-text-types';

export type RichText = {
  json: Document;
};

export type Image = {
  url: string;
  name?: string;
  description?: string;
};

export type Collection<T> = {
  items: T[];
};
