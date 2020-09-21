import styles from './styles.module.scss';

type Props = {
  link?: string;
  children: React.ReactNode;
};

function AboutLink({ link, children }: Props) {
  return link ? (
    <li className={styles.about_link}>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  ) : null;
}

export default AboutLink;
