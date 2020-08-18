import { FaQuestion } from 'react-icons/fa';
import styles from './styles.module.scss';

interface Props {
  question: string;
  answer: string;
}

function FAQCell({ question, answer }: Props) {
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

export default FAQCell;
