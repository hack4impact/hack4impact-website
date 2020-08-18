import PropTypes from 'prop-types';
import { FaQuestion } from 'react-icons/fa';
import styles from './styles.module.scss';

function FAQCell({ question, answer }) {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <FaQuestion />
      </div>
      <div>
        <div className={styles.question}>{question}</div>
        <p>{answer}</p>
      </div>
    </div>
  );
}

FAQCell.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQCell;
