import styles from './styles.module.scss';
import person from './item-interface';

function Item({ image, name, role, onClick }: person) {
  return (
    <li className={styles.item_wrapper} onClick={onClick} role="presentation">
      <img className={styles.image} src={image} alt={name} />
      <br />
      <b>{name}</b>
      <div>{role}</div>
    </li>
  );
}

export default Item;
