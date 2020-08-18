import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import HoverShinyEffect from '../HoverShinyEffect';

function Button({ children, href, className, id, type, external }) {
  if (external) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classNames(styles.button, className, styles[type])}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a id={id} className={classNames(styles.button, className, styles[type])}>
        {children}
        <HoverShinyEffect />
      </a>
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  external: PropTypes.bool,
};

Button.defaultProps = {
  href: '/',
  type: 'primary',
};

export default Button;
