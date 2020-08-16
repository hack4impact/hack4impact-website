import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
const classNames = require('classnames');

function ChapterTable({
  items,
  children,
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.root}
    >
      <div className={styles.chapters}>
        {
          items.map((item, i) => (
            <div 
              onClick={() => setSelected(i)}
              className={classNames(styles.chapter_select, {
                [styles.selected]: selected === i
              })}
              role="button"
              tabIndex={i}
            >
              <img
                src={item.logoUrl}
                alt={item.name}
                className={styles.logo}
              />
            </div>
          ))
        }
      </div>
      {React.cloneElement(children, { ...items[selected] })}
    </div>
  )
}

ChapterTable.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
}

export default ChapterTable;