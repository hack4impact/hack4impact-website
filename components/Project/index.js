import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function determineLinkName(link) {
  if (link.includes('github')) {
    return 'Visit GitHub';
  }
  return 'Visit Site';
}

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

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Project;
