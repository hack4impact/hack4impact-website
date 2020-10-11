import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import VisuallyHidden from '@reach/visually-hidden';
import Chapter from '@utils/contentTypes/Chapter';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import ChapterFeature from '../ChapterFeature';
import { useRouter } from 'next/router';

type Props = {
  chapters: Chapter[];
};

function ChapterTable({ chapters }: Props) {
  const selectRibbonRef = useRef(null);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const router = useRouter();
  const { chapter: chapterSlug = '' } = router.query;

  // if someone passes a chapter slug in the URL,
  // scroll to the "our chapters" section
  // and select that chapter in the carousel
  useEffect(() => {
    const chapterMatchingSlug = chapters.findIndex(({ slug }) => slug === chapterSlug);

    if (chapterMatchingSlug > 0) {
      document.getElementById('our-chapters').scrollIntoView({ behavior: 'smooth' });
      onChangeTab(chapterMatchingSlug);
    }
  }, [chapterSlug]);

  // scroll to the currently selected chapter
  const onChangeTab = (index: number) => {
    const { scrollWidth, clientWidth } = selectRibbonRef.current;
    const thumbnailWidth = scrollWidth / chapters.length;
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
    setSelectedChapter(index);
  };

  return (
    <Tabs className={styles.root} index={selectedChapter} onChange={onChangeTab}>
      <div className={styles.header}>
        <h2 id="our-chapters">Our Chapters</h2>
        <p className={styles.chapter_count}>{chapters.length} chapters and counting</p>
      </div>
      <TabList className={styles.chapter_select_ribbon}>
        <div className={styles.chapter_select_option_container} ref={selectRibbonRef}>
          {chapters.map(({ name, universityLogo }) => (
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
        {chapters.map(item => (
          <TabPanel key={item.name}>
            <ChapterFeature {...item} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default ChapterTable;
