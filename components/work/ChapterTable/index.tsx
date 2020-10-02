import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import VisuallyHidden from '@reach/visually-hidden';
import Chapter from '@utils/contentTypes/Chapter';

type Props = {
  items: Chapter[];
  children: (chapter: Chapter) => React.ReactNode;
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
      <div className={styles.header}>
        <h2 id="our-chapters">Our Chapters</h2>
        <p className={styles.chapter_count}>{items.length} chapters and counting</p>
      </div>
      <div className={styles.chapter_select_ribbon}>
        <div className={styles.chapter_select_option_container} ref={selectRibbonRef}>
          {items.map(({ name, universityLogo }, index) => (
            <button
              key={name}
              onClick={e => onSelect(e, index)}
              className={classNames(styles.chapter_select_option, {
                [styles.selected]: selected === index,
              })}>
              <img
                src={universityLogo.url}
                alt={universityLogo.description}
                height="50"
                width="50"
              />
              <VisuallyHidden>{name}</VisuallyHidden>
            </button>
          ))}
        </div>
      </div>
      {children(items[selected])}
    </div>
  );
}

export default ChapterTable;
