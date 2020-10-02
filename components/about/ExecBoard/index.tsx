import Container from '@components/shared/Container';
import StaggerAnimOnScroll, { StaggerItem } from '@components/shared/StaggerAnimOnScroll';
import ExecMember from '@utils/contentTypes/ExecMember';
import styles from './styles.module.scss';
import { useState } from 'react';
import AboutMeModal from './AboutMeModal';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';

type Props = {
  execMembers: ExecMember[];
};

function ExecBoard({ execMembers }: Props) {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedExecMember, setSelectedExecMember] = useState(0);
  const openAboutModal = (index: number) => {
    setSelectedExecMember(index);
    setModalOpened(true);
  };
  return (
    <Container>
      <h2>National Board</h2>
      <StaggerAnimOnScroll className={styles.list_container}>
        {execMembers.map(({ name, title, photo }, index) => (
          <StaggerItem
            key={name}
            animHidden={{ opacity: 0, y: 100 }}
            animShow={{ opacity: 1, y: 0 }}>
            <button
              className={styles.member_container}
              aria-label={`Learn more about ${name}`}
              onClick={() => openAboutModal(index)}>
              <img src={photo.url} alt={photo.description} />
              <h3>{name}</h3>
              <p>{title}</p>
              <p aria-hidden={true} className={styles.about_button}>
                About me <ArrowIcon size={28} />
              </p>
            </button>
          </StaggerItem>
        ))}
      </StaggerAnimOnScroll>
      <AboutMeModal
        execMember={execMembers[selectedExecMember]}
        isOpen={modalOpened}
        close={() => setModalOpened(false)}
      />
    </Container>
  );
}

export default ExecBoard;
