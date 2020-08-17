import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

function Card ({
  title,
  subtitle,
  description,
  href,
  buttonTitle,
  children,
}) {
  return (
    <div className={styles.card_root}>
      <div className={styles.card_column}>
        <div className={styles.card_content}>
          <small>{subtitle}</small>
          <h3 style={{ marginTop: 12 }}>{title}</h3>
          <p>{description}</p>
        </div>
        <Button 
          href={href}
          className={styles.card_button}
        >
          { buttonTitle }
        </Button>
      </div>
      <div className={styles.card_icon}>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Card;
