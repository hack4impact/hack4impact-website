import { useState, useEffect, useLayoutEffect } from 'react';
import Container from '@components/shared/Container';
import { FaBullseye } from 'react-icons/fa';
import styles from './styles.module.scss';
import classNames from 'classnames';

const values = [
  {
    title: 'Go for it',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#0094FF',
  },
  {
    title: 'Be open minded',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#FF9BCB',
  },
  {
    title: 'Be critical',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#EF6F6F',
  },
  {
    title: 'Engage your community',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#EFCD54',
  },
  {
    title: 'Be dependable',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#00C3AC',
  },
  // {
  //   title: 'Develop with care',
  //   description:
  //     'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
  //   color: '#0037C3',
  // },
];

function Values() {
  const [selected, setSelected] = useState(2);
  const [displayValues, setDisplayValues] = useState([]);
  const [moveToNext, setMoveToNext] = useState(false);

  useEffect(() => {
    setDisplayValues(values);

    const carouselInterval = setInterval(() => {
      setMoveToNext(true);
    }, 4000);

    return () => clearInterval(carouselInterval);
  }, []);

  useEffect(() => {
    if (moveToNext) {
      setSelected((selected + 1) % values.length);
      setTimeout(() => {
        const nextValue = Math.floor(selected + 1 + displayValues.length / 2);
        setDisplayValues([...displayValues.slice(1), values[nextValue % values.length]]);
        setMoveToNext(false);
      }, 300);
    }
  }, [moveToNext]);

  return (
    <Container className={styles.root}>
      <h2>Our Values</h2>
      <div className={styles.carousel_container}>
        <div
          className={classNames(styles.value_card_container, {
            [styles.move]: moveToNext,
          })}>
          {displayValues.map(({ title, description, color }) => (
            <article
              className={classNames(styles.value_card, {
                [styles.selected]: values[selected].title === title,
              })}
              key={title}
              style={{ borderColor: color }}>
              <FaBullseye style={{ fill: color }} size={50} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Values;
