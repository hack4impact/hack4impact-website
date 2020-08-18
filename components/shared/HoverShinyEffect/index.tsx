import { useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';

function HoverShinyEffect() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    function mouseMoveEvent(e) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      console.log(e);
      containerRef.current.style.setProperty('--px', e.clientX - x);
      containerRef.current.style.setProperty('--py', e.clientY - y);
    }
    containerRef.current.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
    };
  }, []);

  return <div ref={containerRef} className={styles.shiny_boi}></div>;
}

export default HoverShinyEffect;
