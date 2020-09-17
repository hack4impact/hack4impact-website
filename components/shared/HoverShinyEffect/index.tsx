import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
  color?: string;
};

function HoverShinyEffect({ color }: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    function mouseMoveEvent(e) {
      const { x } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty('--px', e.clientX - x);
      color && containerRef.current.style.setProperty('--color', color);
    }
    containerRef.current.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
    };
  }, []);

  return <div ref={containerRef} className={styles.shiny_boi}></div>;
}

export default HoverShinyEffect;
