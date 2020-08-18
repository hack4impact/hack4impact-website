import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  size: number,
  className: string,
};

function Accent({ size = 18, className }: Props) {
  return (
    <div
      style={{ transform: `scale(${size / 18})` }}
      className={classNames(styles.root, className)}
    />
  );
}

export default Accent;
