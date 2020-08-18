import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Accent({ size, className }) {
  return (
    <div
      style={{ transform: `scale(${size / 18})` }}
      className={classNames(styles.root, className)}
    />
  );
}

Accent.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

Accent.defaultProps = {
  size: 18,
};

export default Accent;
