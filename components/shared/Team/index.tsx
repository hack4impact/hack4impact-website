import { Dialog } from '@reach/dialog';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import Content from './dialog-content';
import Item from './team-item';
import styles from './styles.module.scss';

export type PersonType = {
  image: string;
  name: string;
  role?: string;
  school?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  website?: string;
  description?: string;
  onClick?: () => void;
};

type Props = {
  items: PersonType[];
  infinite: boolean;
};

function Team({ infinite, items }: Props) {
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
          <button type="button" className={styles.close} onClick={close}>
            <FaTimes />
          </button>
          <Content {...current} />
        </Dialog>
      </ul>
    </>
  );
}

export default Team;
