import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import HoverShinyEffect from '../HoverShinyEffect';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  activeRoute: string;
  referenceRoute?: string;
  className?: string;
  ariaLabel?: string;
};

function NavLink({
  children,
  href,
  activeRoute,
  referenceRoute,
  className,
  ariaLabel,
}: NavLinkProps) {
  return (
    <Link href={href}>
      <a
        aria-label={ariaLabel}
        className={classNames({
          [styles.active_route]: activeRoute === href || activeRoute.includes(referenceRoute),
          [className]: className != null,
        })}>
        {children}
        <HoverShinyEffect color="#001aff" />
      </a>
    </Link>
  );
}

export default NavLink;