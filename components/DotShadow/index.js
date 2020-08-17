import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

function DotShadow({ height, width, className }) {
  return (
    <div
      className={classNames(styles.root, className)}
      style={{
        height,
        width,
      }}
    />
  );
}

DotShadow.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default DotShadow;
