import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Header({ title, children }) {
  return (
    <>
      <div className={styles.content}>
        <h1>{title}</h1>
        <span>{children}</span>
      </div>
      <div className={styles.divider} />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Header;
