import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ProjectType } from '../../../shared/Project';

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
            tabIndex={i}>
            <img src={item.logoUrl} alt={item.name} className={styles.logo} />
          </button>
        ))}
      </div>
      {children(items[selected])}
    </div>
  );
}

export default ChapterTable;
