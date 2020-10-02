import styles from './styles.module.scss';
import LinkButton from '@components/shared/LinkButton';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  buttonTitle: string;
  isExternalLink?: boolean;
  children: React.ReactNode;
};

function Card({
  title,
  subtitle,
  description,
  href,
  buttonTitle,
  isExternalLink = false,
  children,
}: Props) {
  return (
    <div className={styles.card_root}>
      <div className={styles.card_content}>
        <hgroup>
          <h3>{subtitle}</h3>
          <h4 style={{ marginTop: 12 }}>{title}</h4>
        </hgroup>
        <p>{description}</p>
      </div>
      <LinkButton href={href} className={styles.card_button} external={isExternalLink}>
        {buttonTitle}
        <ArrowIcon size={32} />
      </LinkButton>
      <div className={styles.card_icon}>{children}</div>
    </div>
  );
}

export default Card;
