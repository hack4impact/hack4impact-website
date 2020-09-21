import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = React.ImgHTMLAttributes<null> & {
  className?: string;
};

function ImageHighlight({ src = '', alt = '', className = '', ...props }: Props) {
  return (
    <div className={classNames(styles.angle_bracket_wrapper, className)}>
      <div className={styles.shadow_wrapper}>
        <img src={src} alt={alt} {...props} />
      </div>
    </div>
  );
}

export default ImageHighlight;
