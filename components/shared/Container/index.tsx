import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children?: any;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <>
      <section className={classNames('contain', className, styles.root)}>{children}</section>
    </>
  );
}

export default Container;
