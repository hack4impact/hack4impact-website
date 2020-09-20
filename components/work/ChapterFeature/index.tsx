import ProjectView from '@components/shared/Project';
import ImageHighlight from '@components/shared/ImageHighlight';
import Chapter from '@utils/contentTypes/Chapter';
import styles from './styles.module.scss';

const height = 375;
const width = 500;

function ChapterFeature({ name, photo, location, projects }: Chapter) {
  return (
    <div style={{ marginTop: 20 }}>
      <div className="row spaced aligned wrap">
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>Located in {location}</p>
        </div>
        <div className={styles.image_wrap}>
          <ImageHighlight height={height} width={width}>
            <img
              src={photo.url}
              alt={photo.description}
              style={{ height, width }}
              className={styles.image}
            />
          </ImageHighlight>
        </div>
      </div>
      <h4 style={{ marginTop: 60 }}>Team</h4>
      <h4 style={{ marginTop: 60 }}>Featured Projects</h4>
      {projects.items.map(item => (
        <ProjectView key={item.name} {...item} />
      ))}
    </div>
  );
}

export default ChapterFeature;
