import PropType from 'prop-types';
import DotShadow from '../DotShadow';
import Accent from '../Accent';
import styles from './styles.module.scss';

function ImageHighlight({ children, height, width }) {
  return (
    <div className={styles.root}>
      <div className={styles.dot_shadow}>
        <DotShadow height={height + 30} width={width + 30} />
      </div>
      {children}
      <div className={styles.accent_wrapper} style={{ height: height + 20, width: width + 20 }}>
        <Accent className={styles.accent_1} />
        <Accent className={styles.accent_2} />
      </div>
    </div>
  );
}

ImageHighlight.propTypes = {
  children: PropType.element,
  height: PropType.number,
  width: PropType.number,
};

export default ImageHighlight;
