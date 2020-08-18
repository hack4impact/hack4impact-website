import styles from './styles.module.scss';
import { PersonType } from './';

function Content({
  image,
  name,
  role,
  school,
  linkedin,
  github,
  email,
  website,
  description,
}: PersonType) {
  return (
    <>
      <img className={styles.profile} src={image} alt={name} />
      <h2 className={styles.card_name}>{name}</h2>
      {school}
      {role}
      <p>{description}</p>
      <div className={styles.links}>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {email && (
          <a href={email} target="_blank" rel="noreferrer">
            Email
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </>
  );
}

export default Content;
