import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import HoverShinyEffect from '../HoverShinyEffect';
import classNames from 'classnames';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  activeRoute: string;
  referenceRoute?: string;
};

function NavLink({ children, href, activeRoute, referenceRoute }: NavLinkProps) {
  return (
    <li
      className={classNames({
        [styles.activeRoute]: activeRoute === href || activeRoute.includes(referenceRoute),
      })}>
      <Link href={href}>
        <a>
          {children}
          <HoverShinyEffect color="#001aff" />
        </a>
      </Link>
    </li>
  );
}

function Nav() {
  const router = useRouter();
  const activeRoute = router.pathname;

  return (
    <header>
      <nav className={styles.navContainer}>
        <ul>
          <NavLink activeRoute={activeRoute} href="/">
            <div className={styles.image}></div>
          </NavLink>
          <NavLink activeRoute={activeRoute} href="/about">
            About Us
          </NavLink>
          <NavLink activeRoute={activeRoute} href="/work">
            Our Work
          </NavLink>
          <NavLink activeRoute={activeRoute} href="/apply/nonprofit" referenceRoute="/apply">
            Apply
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
