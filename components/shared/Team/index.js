import PropTypes from 'prop-types';
import { Dialog } from '@reach/dialog';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import Content from './dialog-content';
import Item from './team-item';
import styles from './styles.module.scss';
import person from './item-interface';

function Team({ infinite, items }) {
  const [current, setCurrent] = useState(items[0]);
  const [showDialog, setShowDialog] = useState(false);

  function close() {
    setShowDialog(false);
  }

  return (
    <>
      <ul
        className={classNames(styles.container, {
          [styles.infinite]: infinite,
          [styles.wrap]: !infinite,
        })}>
        {items.map(item => (
          <Item
            {...item}
            key={item.name}
            onClick={() => {
              setShowDialog(true);
              setCurrent(item);
            }}
          />
        ))}
        <Dialog
          aria-label={`More info about ${current.name}`}
          isOpen={showDialog}
          onDismiss={close}>
          <button type="button" className={styles.close} onClick={close} tabIndex="0">
            <FaTimes />
          </button>
          <Content {...current} />
        </Dialog>
      </ul>
    </>
  );
}

Team.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(person).isRequired),
  infinite: PropTypes.bool,
};

export default Team;
