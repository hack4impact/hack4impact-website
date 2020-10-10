import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  toggled: boolean;
};

function MobileDropdownToggle({ toggled, ...buttonProps }: Props) {
  return (
    <button
      aria-label="Toggle navigation dropdown"
      className={classNames(styles.mobile_dropdown_toggle, {
        [styles.toggled]: toggled,
      })}
      {...buttonProps}>
      <span className={styles.stripe_top}></span>
      <span className={styles.stripe_middle}></span>
      <span className={styles.stripe_bottom}></span>
    </button>
  );
}

export default MobileDropdownToggle;
