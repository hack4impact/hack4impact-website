import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

function NavLink({ children, href, activeRoute }) {
  return (
    <li className={activeRoute === href ? styles.activeRoute : ''}>
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
          <NavLink activeRoute={activeRoute} href="/apply">
            Apply
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
