interface person {
  image: string;
  name: string;
  role?: string;
  school?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  website?: string;
  description?: string;
  onClick?: () => void;
};

export default person;
