import PropTypes from 'prop-types';
import Team from '../../../shared/Team';
import Project from '../../../shared/Project';
import ImageHighlight from '../../../shared/ImageHighlight';
import person from '../../../shared/Team/item-interface';
import project from '../../../shared/Project/item-interface';
import styles from './styles.module.scss';
import determineLinkName from '../../../../scripts/determineLinkName';

const height = 200;
const width = 260;

function ChapterFeature({ name, image, description, link, team, projects }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div className="row spaced aligned wrap">
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              {determineLinkName(link)}
            </a>
          )}
        </div>
        <div className={styles.image_wrap}>
          <ImageHighlight height={height} width={width}>
            <img src={image} alt={name} style={{ height, width }} className={styles.image} />
          </ImageHighlight>
        </div>
      </div>
      <h4 style={{ marginTop: 60 }}>Team</h4>
      <div className={styles.table_wrapper}>
        <Team items={team} infinite />
      </div>
      <h4 style={{ marginTop: 60 }}>Featured Projects</h4>
      {projects.map(item => (
        <Project key={item.title} {...item} />
      ))}
    </div>
  );
}

ChapterFeature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  team: PropTypes.arrayOf(PropTypes.shape(person)),
  projects: PropTypes.arrayOf(PropTypes.shape(project)),
};

export default ChapterFeature;
