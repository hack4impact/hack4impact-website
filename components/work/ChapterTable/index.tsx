import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ProjectType } from '@components/shared/Project';
import VisuallyHidden from '@reach/visually-hidden';

export type TeamType = {
  image: string;
  name: string;
  role: string;
};

export type ChapterType = {
  name: string;
  logoUrl: string;
  image: string;
  description: string;
  link: string;
  team: TeamType[];
  projects: ProjectType[];
};

type Props = {
  items: ChapterType[];
  children: (chapter: ChapterType) => React.ReactNode;
};

function ChapterTable({ items, children }: Props) {
  const [selected, setSelected] = useState(0);
  const selectRibbonRef = useRef(null);

  const onSelect = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>, index: number) => {
    // figure out how far to scroll over, depending on the element clicked on
    let offset = currentTarget.offsetLeft - currentTarget.offsetWidth + 10;

    // then, figure out the difference between the width of the screen and the width of the selection ribbon
    const scrollOffset = selectRibbonRef.current.scrollWidth - selectRibbonRef.current.clientWidth;

    if (offset > scrollOffset) {
      // f you're scrolling really far, only scroll to the edge of the container (to prevent a janky experience)
      offset = scrollOffset;
    } else if (offset < 0) {
      // if you're scrolling back to the beginning, don't go to a negative value! Just snap to zero
      offset = 0;
    }
    // now, shift the ribbon to the scroll position we want using CSS
    selectRibbonRef.current.style.transform = `translateX(-${offset}px)`;
    // finally, display the associated chapter info
    setSelected(index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.chapter_select_ribbon}>
        <div className={styles.chapter_select_option_container} ref={selectRibbonRef}>
          {items.map((item, index) => (
            <button
              key={item.name}
              onClick={e => onSelect(e, index)}
              className={classNames(styles.chapter_select_option, {
                [styles.selected]: selected === index,
              })}>
              <img src={item.logoUrl} alt={item.name} height="50" width="50" />
              <VisuallyHidden>{item.name}</VisuallyHidden>
            </button>
          ))}
        </div>
      </div>
      {children(items[selected])}
    </div>
  );
}

export default ChapterTable;
