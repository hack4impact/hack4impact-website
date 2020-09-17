import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  toggled: boolean;
  onClick: () => void;
};

function MobileDropdownToggle({ onClick, toggled }: Props) {
  return (
    <button
      aria-label="Toggle navigation dropdown"
      onClick={onClick}
      className={classNames(styles.mobile_dropdown_toggle, {
        [styles.toggled]: toggled,
      })}>
      <span className={styles.stripe_top}></span>
      <span className={styles.stripe_middle}></span>
      <span className={styles.stripe_bottom}></span>
    </button>
  );
}

export default MobileDropdownToggle;
