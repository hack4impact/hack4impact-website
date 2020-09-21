import ProjectView from '@components/shared/Project';
import Chapter from '@utils/contentTypes/Chapter';
import styles from './styles.module.scss';
import ImageHightlight from '@components/shared/ImageHighlight';

function ChapterFeature({ name, photo, location, projects }: Chapter) {
  return (
    <div className={styles.root}>
      <div className={styles.about_chapter_container}>
        <div className={styles.text_content}>
          <h3>{name}</h3>
          <p>Located in {location}</p>
        </div>
        <ImageHightlight
          className={styles.image}
          src={photo.url}
          alt={photo.description}
          height="375"
          width="500"
        />
      </div>
      <h4>Featured Projects</h4>
      {projects.items.map(item => (
        <ProjectView key={item.name} {...item} />
      ))}
    </div>
  );
}

export default ChapterFeature;
