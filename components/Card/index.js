import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../Button';
import HoverShinyEffect from '../HoverShinyEffect';

function Card({ title, subtitle, description, href, buttonTitle, children }) {
  return (
    <div className={styles.card_root}>
      <div className={styles.card_content}>
        <hgroup>
          <h3>{subtitle}</h3>
          <h4 style={{ marginTop: 12 }}>{title}</h4>
        </hgroup>
        <p>{description}</p>
      </div>
      <Button href={href} className={styles.card_button}>
        {buttonTitle}
        <HoverShinyEffect />
      </Button>
      <div className={styles.card_icon}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Card;
