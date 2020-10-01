import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdArrowDropDownCircle } from 'react-icons/md';
import classNames from 'classnames';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@reach/disclosure';
import styles from './styles.module.scss';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FAQ } from '@utils/contentTypes/Apply';

function FAQCell({ question, answer }: FAQ) {
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
            <div
              className={styles.answer}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(answer.json),
              }}
            />
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

export default FAQCell;
