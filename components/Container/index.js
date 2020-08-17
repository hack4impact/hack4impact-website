import PropTypes from 'prop-types';

function Container({ children }) {
  return <section className="contain">{children}</section>;
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
