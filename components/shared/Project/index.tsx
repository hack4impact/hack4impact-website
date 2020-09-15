import styles from './styles.module.scss';
import determineLinkName from '@utils/determineLinkName';

export type ProjectType = {
  image: string;
  title: string;
  tags?: string[];
  description?: string;
  link: string;
};

function Project({ image, title, tags, description, link }: ProjectType) {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={image} alt={title} />
      <div>
        <b className={styles.title}>{title}</b>
        <div className={styles.tags}>
          {tags.map(tag => (
            <div key={tag} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          {determineLinkName(link)}
        </a>
      </div>
    </div>
  );
}

export default Project;
