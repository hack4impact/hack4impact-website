import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';

function Button ({
  children,
  href,
  className,
  id,
}) {
  return (<Link href={href}>
    <a
      id={id}
      className={`${styles.button} ${className}`}
    >
      {children}
    </a>
  </Link>);
}

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.id,
}

export default Button;
