import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Item from './team-item';
import Content from './dialog-content';
import { Dialog } from "@reach/dialog";
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import person from './item-interface';
var classNames = require('classnames');

function Team({
  infinite,
  items,
}) {
  const [current, setCurrent] = useState(items[0]);
  const [showDialog, setShowDialog] = useState(false);

  function close() {
    setShowDialog(false);
  }

  return(
    <>
      <ul className={classNames(styles.container, {
        [styles.infinite]: infinite,
        [styles.wrap]: !infinite,
      })}>
        {
          items.map((item, i) => <Item {...item} onClick={() => {
            setShowDialog(true);
            setCurrent(item);
          }}/>)
        }
        <Dialog isOpen={showDialog} onDismiss={close}>
          <div 
            className={styles.close}
            onClick={close}
            role="button"
            tabIndex="0"
          >
            <FaTimes />
          </div>
          <Content {...current} />
        </Dialog>
      </ul>
    </>
  )
}

Team.propTypes = {
  items: PropTypes.shape(person).isRequired,
  infinite: PropTypes.bool,
}

export default Team;
