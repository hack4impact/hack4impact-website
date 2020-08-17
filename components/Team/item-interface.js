import PropTypes from 'prop-types';

const person = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  school: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  description: PropTypes.string,
};

export default person;
