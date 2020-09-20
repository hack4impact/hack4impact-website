import Container from '@components/shared/Container';
import ExecMember from '@utils/contentTypes/ExecMember';
import styles from './styles.module.scss';
import { useState } from 'react';
import AboutMeModal from './AboutMeModal';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';

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
      <h2>Exec Board</h2>
      <div className={styles.list_container}>
        {execMembers.map(({ name, title, photo }, index) => (
          <article key={name} className={styles.member_container}>
            <img src={photo.url} alt={photo.description} />
            <h3>{name}</h3>
            <p>{title}</p>
            <button className={styles.about_button} onClick={() => openAboutModal(index)}>
              About me <ArrowIcon size={28} />
              <HoverShinyEffect color="blue" />
            </button>
          </article>
        ))}
      </div>
      <AboutMeModal
        execMember={execMembers[selectedExecMember]}
        isOpen={modalOpened}
        close={() => setModalOpened(false)}
      />
    </Container>
  );
}

export default ExecBoard;
