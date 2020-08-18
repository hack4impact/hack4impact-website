import styles from './styles.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
};

function Header({ title, children }: Props) {
  return (
    <>
      <div className={styles.content}>
        <h1>{title}</h1>
        <span>{children}</span>
      </div>
      <div className={styles.divider} />
    </>
  );
}

export default Header;
