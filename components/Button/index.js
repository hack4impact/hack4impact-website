import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames';

function Button ({
  children,
  href,
  className,
  id,
  type,
}) {
  return (<Link href={href}>
    <a
      id={id}
      className={classNames(styles.button, className, styles[type])}
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
  type: PropTypes.string,
}

Button.defaultProps = {
  href: "/",
  type: "primary",
}

export default Button;
