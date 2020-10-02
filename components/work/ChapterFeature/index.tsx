import ProjectView from '@components/shared/Project';
import Chapter from '@utils/contentTypes/Chapter';
import styles from './styles.module.scss';
import ImageHightlight from '@components/shared/ImageHighlight';
import StaggerAnimOnScroll, { StaggerItem } from '@components/shared/StaggerAnimOnScroll';
import AboutLink from './AboutLink';
import {
  IoIosGlobe as WebsiteLinkIcon,
  IoIosHeart as SocialMediaLinkIcon,
  IoIosCodeWorking as CodeRepoLinkIcon,
} from 'react-icons/io';

function ChapterFeature({
  name,
  photo,
  location,
  email,
  establishedDate,
  incubating,
  websiteLink,
  socialMediaLink,
  socialMediaLinkType,
  codeRepoLink,
  projects,
}: Chapter) {
  return (
    <div className={styles.root}>
      <div className={styles.about_chapter_container}>
        <div className={styles.text_content}>
          <hgroup>
            <h4 className={styles.established_date}>
              {incubating ? <strong>Incubating</strong> : <span>EST. {establishedDate}</span>}
            </h4>
            <h3>{name}</h3>
          </hgroup>
          <p className={styles.subheading}>
            Located in {location}{' '}
            <a className={styles.contact} href={'mailto:' + email} target="_blank" rel="noreferrer">
              • Contact
            </a>
          </p>
          <ul className={styles.links}>
            <AboutLink link={websiteLink}>
              <WebsiteLinkIcon /> Learn more on their site
            </AboutLink>
            <AboutLink link={socialMediaLink}>
              <SocialMediaLinkIcon /> Follow on {socialMediaLinkType}
            </AboutLink>
            <AboutLink link={codeRepoLink}>
              <CodeRepoLinkIcon /> Browse their project repos
            </AboutLink>
          </ul>
        </div>
        <ImageHightlight
          className={styles.image}
          src={photo.url}
          alt={photo.description}
          height="355"
          width="500"
        />
      </div>
      {projects?.items?.length ? (
        <>
          <h4>Featured Projects</h4>
          <StaggerAnimOnScroll>
            {projects.items.map(item => (
              <StaggerItem key={item.name}>
                <ProjectView {...item} />
              </StaggerItem>
            ))}
          </StaggerAnimOnScroll>
        </>
      ) : null}
    </div>
  );
}

export default ChapterFeature;
