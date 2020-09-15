import styles from './styles.module.scss';

function Banner() {
  return (
    <div className={styles.root}>
      <div className={styles.b1}>
        <img src={'http://placekitten.com/g/1000/500'} alt="" className={styles.image} />
      </div>
      <div className={styles.b2} />
    </div>
  );
}

export default Banner;
