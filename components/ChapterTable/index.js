import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

function ChapterTable({ items, children }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.chapters}>
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelected(i)}
            className={classNames(styles.chapter_select, {
              [styles.selected]: selected === i,
            })}
            tabIndex={i}
          >
            <img src={item.logoUrl} alt={item.name} className={styles.logo} />
          </button>
        ))}
      </div>
      {children(items[selected])}
    </div>
  );
}

ChapterTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logoUrl: PropTypes.string.isRequired,
    }).isRequired
  ),
  children: PropTypes.element.isRequired,
};

export default ChapterTable;
