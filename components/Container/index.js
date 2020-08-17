import PropTypes from 'prop-types';
import classNames from 'classnames';

function Container({ children, className }) {
  return <section className={classNames('contain', className)}>{children}</section>;
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
