import Team from '@components/shared/Team';
import Project, { ProjectType } from '@components/shared/Project';
import ImageHighlight from '@components/shared/ImageHighlight';
import { PersonType } from '@components/shared/Team';
import determineLinkName from '@utils/determineLinkName';
import styles from './styles.module.scss';

const height = 200;
const width = 260;

type Props = {
  name: string;
  image: string;
  description: string;
  link: string;
  team: PersonType[];
  projects: ProjectType[];
};

function ChapterFeature({ name, image, description, link, team, projects }: Props) {
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

export default ChapterFeature;
