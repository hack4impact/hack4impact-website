import ExecMember from '@utils/contentTypes/ExecMember';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { IoIosClose as CloseIcon } from 'react-icons/io';
import styles from './styles.module.scss';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Props = {
  execMember: ExecMember;
  isOpen: boolean;
  close: () => void;
};

function AboutMeModal({
  execMember: { name, title, photo, description, linkedIn },
  isOpen,
  close,
}: Props) {
  return (
    <DialogOverlay className={styles.modal_backdrop} isOpen={isOpen} onDismiss={close}>
      <DialogContent className={styles.modal_content} aria-label={`More info about ${name}`}>
        <div className={styles.close_button_container}>
          <button onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden>
            <CloseIcon size={44} />
          </button>
        </div>
        <img height="250" width="250" src={photo.url} alt={photo.description} />
        <hgroup>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </hgroup>
        <a href={linkedIn}>Follow on LinkedIn</a>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(description.json),
          }}></div>
      </DialogContent>
    </DialogOverlay>
  );
}

export default AboutMeModal;
