import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';


function Footer () {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_content}>
        <div className={styles.left_content}>
          <h2>Contact Us</h2>
          <p>Couldn't find what you're looking for?</p>
          <p>Contact us through email to get in touch!</p>
          <Link href="hello@hack4impact.org">
            <a href="hello@hack4impact.org" className={styles.footer_email}>hello@hack4impact.org</a>
          </Link>
        </div>
        
        <div className={styles.right_content}>
          <div className={styles.link_list}>
            <h4>General</h4>
            <Link href="/about"> 
              <a className={styles.footer_link}>About Us</a>
            </Link>
            <Link href="/chapter"> 
              <a className={styles.footer_link}>Our Chapters</a>
            </Link>
          </div>
          
          <div className={styles.link_list}>
            <h4>Get Involved</h4>
            <Link href="/chapter"> 
              <a className={styles.footer_link}>For new chapter</a>
            </Link>
            <Link href="chapters"> 
              <a className={styles.footer_link}>Our Chapters</a>
            </Link>
          </div>
        </div>
      </div>
    </div>);
}

export default Footer;