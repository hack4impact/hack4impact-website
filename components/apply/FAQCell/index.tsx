import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdArrowDropDownCircle } from 'react-icons/md';
import classNames from 'classnames';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@reach/disclosure';
import styles from './styles.module.scss';

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
        <div className={styles.question}>{question}</div>
        <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
          <DisclosureButton>
            <div className={styles.dropdown}>
              Answer{' '}
              <MdArrowDropDownCircle
                className={classNames(styles.dropdown_icon, {
                  [styles.selected]: isOpen,
                })}
              />
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
