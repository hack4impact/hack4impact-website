import PropTypes from 'prop-types';

const project = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default project;