import { useState, useEffect, useRef } from 'react';
import Container from '@components/shared/Container';
import { FaBullseye } from 'react-icons/fa';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';
import styles from './styles.module.scss';
import classNames from 'classnames';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';

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
];

function Values() {
  const [selected, setSelected] = useState(2);
  const [displayValues, setDisplayValues] = useState([]);
  const [moveToNext, setMoveToNext] = useState(false);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    setDisplayValues(values);

    autoScrollInterval.current = setInterval(() => {
      setMoveToNext(true);
    }, 4000);

    return () => clearInterval(autoScrollInterval.current);
  }, []);

  const onClickNext = () => {
    if (autoScrollInterval?.current) {
      clearInterval(autoScrollInterval.current);
    }
    setMoveToNext(true);
  };

  useEffect(() => {
    // whenever we need to move to the next element...
    if (moveToNext) {
      // change which card is focused (wrapping to the start of the list if necessary)
      setSelected((selected + 1) % values.length);
      // once we're done scrolling to our focused card...
      setTimeout(() => {
        // figure out what the "next" value is
        // for example, if we are currently displaying cards 1 through 5 and our list is 5 elements long,
        // the next value will be value number 1 (so we wrap back to the beginning)
        const nextValue = selected + Math.ceil(displayValues.length / 2);
        // now, chop off the first card in the list and append our "next" value onto the end
        // if we don't chop off the front, our list could be infinitely long overtime!
        setDisplayValues([...displayValues.slice(1), values[nextValue % values.length]]);
        // finally, reset our transition
        // this will essentially undo our transition to the next card,
        // but since we chopped off the first value, we won't notice this jump visually!
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
      <div className={styles.button_container}>
        <button
          className={styles.next_value_button}
          onClick={onClickNext}
          style={{ backgroundColor: values[selected].color }}>
          Next <ArrowIcon />
          <HoverShinyEffect color="white" />
        </button>
      </div>
    </Container>
  );
}

export default Values;
