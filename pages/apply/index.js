import { useRouter } from 'next/router';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import classNames from 'classnames';

const npRoute = '/apply/nonprofit';
const chRoute = '/apply/chapter';

function Apply() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <main>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <a className={classNames({ [styles.selected]: currentRoute === chRoute })} href={chRoute}>
            For New Chapters
          </a>
          <a className={classNames({ [styles.selected]: currentRoute === npRoute })} href={npRoute}>
            For Non Profits
          </a>
        </div>
      </Header>
    </main>
  );
}

export default Apply;
