import styles from './styles.module.scss';
import project from './item-interface';
import determineLinkName from '../../../scripts/determineLinkName';

function Project({ image, title, tags, description, link }) {
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

Project.propTypes = project;

export default Project;
