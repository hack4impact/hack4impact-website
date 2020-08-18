import styles from './styles.module.scss';
import Button from '../../../shared/Button';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  buttonTitle: string;
  children: React.ReactNode;
}

function Card({ title, subtitle, description, href, buttonTitle, children }: Props) {
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
      </Button>
      <div className={styles.card_icon}>{children}</div>
    </div>
  );
}

export default Card;
