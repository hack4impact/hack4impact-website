import Accent from '../Accent';
import styles from './styles.module.scss';

interface Props {
  children: any;
  height: number;
  width: number;
}

function ImageHighlight({ children, height, width }: Props) {
  return (
    <div className={styles.root}>
      {children}
      <div className={styles.accent_wrapper} style={{ height: height + 20, width: width + 20 }}>
        <Accent className={styles.accent_1} />
        <Accent className={styles.accent_2} />
      </div>
    </div>
  );
}

export default ImageHighlight;
