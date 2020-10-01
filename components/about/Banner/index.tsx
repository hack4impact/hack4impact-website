import styles from './styles.module.scss';
import Container from '@components/shared/Container';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.b1}>
          <img src={'images/uiuc-group.jpg'} alt="UIUC chapter group" />
        </div>
        <div className={styles.b2}>
          <img
            src={'images/bog-medshare.jpg'}
            alt="Bits of Good (Georgia Tech chapter) members volunteering at Medshare"
          />
        </div>
      </div>
      <Container>
        <h2>Our Mission</h2>
        <motion.div
          className={styles.mission}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            show: {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.6,
              },
            },
          }}>
          <p>
            To empower engineers, designers, activists, and humanitarians to create{' '}
            <strong>lasting and impactful social change</strong>, fostering the wider adoption of
            software as a tool for social good.
          </p>
        </motion.div>
      </Container>
    </>
  );
}

export default Banner;
