import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdArrowDropDownCircle } from 'react-icons/md';
import classNames from 'classnames';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@reach/disclosure';
import styles from './styles.module.scss';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';

type Props = {
  question: string;
  answer: string;
};

function FAQCell({ question, answer }: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <FaQuestion />
      </div>
      <div>
        <h3 className={styles.question}>{question}</h3>
        <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
          <DisclosureButton>
            <div className={styles.dropdown}>
              Answer{' '}
              <MdArrowDropDownCircle
                className={classNames(styles.dropdown_icon, {
                  [styles.selected]: isOpen,
                })}
              />
              <HoverShinyEffect color="#001aff" />
            </div>
          </DisclosureButton>
          <DisclosurePanel>
            <p className={styles.answer}>{answer}</p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

export default FAQCell;
