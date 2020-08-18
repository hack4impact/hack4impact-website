import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  activeRoute: string;
  referenceRoute?: string;
}

function NavLink({ children, href, activeRoute, referenceRoute }: NavLinkProps) {
  return (
    <li
      className={
        activeRoute === href || activeRoute.includes(referenceRoute) ? styles.activeRoute : ''
      }>
      <Link href={href}>
        <a>{children}</a>
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
