import PropTypes from 'prop-types';

interface project {
  image: string;
  title: string;
  tags?: [string];
  description?: string;
  link: string;
};

export default project;
