import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import VisuallyHidden from '@reach/visually-hidden';
import Chapter from '@utils/contentTypes/Chapter';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import ChapterFeature from '../ChapterFeature';

type Props = {
  items: Chapter[];
};

function ChapterTable({ items }: Props) {
  const selectRibbonRef = useRef(null);

  const onChangeTab = (index: number) => {
    const { scrollWidth, clientWidth } = selectRibbonRef.current;
    const thumbnailWidth = scrollWidth / items.length;
    // get the middle of our ribbon, relative to the screen width
    // (we'll use this to center up the currently selected chapter for smaller screens)
    const ribbonMidpoint = (clientWidth - thumbnailWidth) / 2;

    // auto-scroll so our selectd chapter lands in the center of the ribbon
    const offsetToCenter = index * thumbnailWidth - ribbonMidpoint + 5;
    const min = 0; // don't auto-scroll past the beginning of our list
    const max = scrollWidth - clientWidth + 10; // don't auto-scroll past the end of our list
    const adjustedOffsetToCenter = Math.min(Math.max(offsetToCenter, min), max);

    // now, shift the ribbon to the scroll position we want using CSS
    selectRibbonRef.current.style.transform = `translateX(-${adjustedOffsetToCenter}px)`;
  };

  return (
    <Tabs className={styles.root} onChange={onChangeTab}>
      <div className={styles.header}>
        <h2 id="our-chapters">Our Chapters</h2>
        <p className={styles.chapter_count}>{items.length} chapters and counting</p>
      </div>
      <TabList className={styles.chapter_select_ribbon}>
        <div className={styles.chapter_select_option_container} ref={selectRibbonRef}>
          {items.map(({ name, universityLogo }) => (
            <Tab key={name} className={styles.chapter_select_option}>
              <img
                src={universityLogo.url}
                alt={universityLogo.description}
                height="50"
                width="50"
              />
              <VisuallyHidden>{name}</VisuallyHidden>
            </Tab>
          ))}
        </div>
      </TabList>
      <TabPanels>
        {items.map(item => (
          <TabPanel key={item.name}>
            <ChapterFeature {...item} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default ChapterTable;
