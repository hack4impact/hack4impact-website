import styles from './styles.module.scss';
import PropTypes from 'prop-types';

function Item({
  image,
  name,
  role,
  onClick,
}) {
  return (
    <li
      className={styles.item_wrapper}
      onClick={onClick}
      role="presentation"
      tabIndex="0"
    >
      <img
        className={styles.image}
        src={image}
        alt={name}
      />
      <br />
      <b>{name}</b>
      <div>{role}</div>
    </li>
  )
}

Item.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  onClick: PropTypes.onClick,
}

export default Item;