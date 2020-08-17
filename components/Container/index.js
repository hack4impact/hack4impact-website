import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Container({ children, className }) {
  return (
    <>
      <section className={classNames('contain', className, styles.root)}>{children}</section>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
