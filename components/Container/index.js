import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spacer from '../Spacer';

function Container({ children, className }) {
  return (
    <>
      <section className={classNames('contain', className)}>{children}</section>
      <Spacer />
    </>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
