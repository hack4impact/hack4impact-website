import Link from 'next/link';
import styles from './styles.module.scss';

function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_content}>
        <div className={styles.left_content}>
          <h2>Contact Us</h2>
          <p>
            Couldn&apos;t find what you&apos;re looking for? Contact us through email to get in
            touch!
          </p>
          <a
            href="mailto:contact@hack4impact.org"
            className={styles.footer_email}
            target="_blank"
            rel="noreferrer">
            contact@hack4impact.org
          </a>
        </div>

        <div className={styles.right_content}>
          <div className={styles.link_list}>
            <h2>Learn More</h2>
            <Link href="/about">
              <a>Our Mission</a>
            </Link>
            <Link href="/work#our-chapters">
              <a>Our Chapters</a>
            </Link>
          </div>

          <div className={styles.link_list}>
            <h2>Get Involved</h2>
            <Link href="/apply/chapter">
              <a>Chapter Applications</a>
            </Link>
            <Link href="/apply/nonprofit">
              <a>Nonprofit Proposals</a>
            </Link>
          </div>

          <div className={styles.link_list}>
            <h2>Follow Us</h2>
            <a href="https://www.linkedin.com/company/hack4impact/about/">LinkedIn</a>
            <a href="https://github.com/hack4impact">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
