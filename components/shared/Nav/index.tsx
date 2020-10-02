import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import MobileDropdownToggle from './MobileDropdownToggle';
import NavLink from './NavLink';
import useHasScrolledDown from '@utils/useHasScrolledDown';
import HoverShinyEffect from '../HoverShinyEffect';

function Nav() {
  const router = useRouter();
  const activeRoute = router.pathname;
  const [mobileNavOpened, setMobileNavOpened] = useState(false);

  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  // when active route changes, we probably clicked on a nav link
  // in this case, collapse the nav dropdown for mobile users
  useEffect(() => {
    setMobileNavOpened(false);
  }, [activeRoute]);

  const hasScrolledDown = useHasScrolledDown();

  return (
    <header
      className={classNames(styles.header, {
        [styles.with_background]: hasScrolledDown,
      })}>
      <nav
        className={classNames(styles.nav_container, {
          [styles.nav_toggled]: mobileNavOpened,
        })}>
        <NavLink
          activeRoute={activeRoute}
          href="/"
          className={styles.logo_link}
          ariaLabel="Go to homepage">
          <img width="275" height="53" src="/svg/logo.svg" alt="Hack4Impact logo" />
        </NavLink>
        <div className={styles.dropdown_link_container}>
          <NavLink activeRoute={activeRoute} href="/about">
            About Us
          </NavLink>
          <NavLink activeRoute={activeRoute} href="/work">
            Our Work
          </NavLink>
          <NavLink
            activeRoute={activeRoute}
            href="/apply/chapter"
            activeOverride={activeRoute.startsWith('/apply')}>
            Apply
          </NavLink>
          <a href="mailto:contact@hack4impact.org">
            Contact Us <HoverShinyEffect color="#001aff" />
          </a>
        </div>

        <MobileDropdownToggle toggled={mobileNavOpened} onClick={toggleMobileNav} />
      </nav>
    </header>
  );
}

export default Nav;
