import Header from '../../components/Header';
import styles from './styles.module.scss';

function Apply() {
  return (
    <main>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <a>For New Chapters</a>
          <a>For Non Profits</a>
        </div>
      </Header>
    </main>
  );
}

export default Apply;
