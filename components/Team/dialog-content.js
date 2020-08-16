import styles from './styles.module.scss';
import person from './item-interface';

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
}) {
  return (
    <>
      <img
        className={styles.profile}
        src={image}
        alt={name}
      />
      <h2 className={styles.card_name}>{name}</h2>
      {school}
      {role}
      <p>{description}</p>
      <div className={styles.links}>
        {
          linkedin
          && <a href={linkedin} target="_blank">LinkedIn</a>
        }
        {
          email
          && <a href={email} target="_blank">Email</a>
        }
        {
          website
          && <a href={website} target="_blank">Website</a>
        }
        {
          github
          && <a href={github} target="_blank">GitHub</a>
        }
      </div>
    </>
  )
}

Content.propTypes = person;

export default Content;
