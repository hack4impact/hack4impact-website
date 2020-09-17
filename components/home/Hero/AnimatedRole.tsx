import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const ANIM_INTERVAL = 3000;
const WIPE_ANIM_DURATION = 500;

function AnimatedRole() {
  const roles = ['Designers', 'Engineers', 'Activists', 'Humanitarians'];
  const [roleIndex, setRoleIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.setProperty('--width', textRef.current.clientWidth);
      textRef.current.animate(
        [
          { transform: 'skew(-20deg) scaleX(0)', transformOrigin: 'left' },
          {
            transform: 'skew(-20deg) scaleX(1)',
            transformOrigin: 'left',
          },
          {
            transform: 'skew(-20deg) scaleX(1)',
            transformOrigin: 'right',
          },
          { transform: 'skew(-20deg) scaleX(0)', transformOrigin: 'right' },
        ],
        {
          duration: WIPE_ANIM_DURATION,
          delay: ANIM_INTERVAL - WIPE_ANIM_DURATION / 2,
          easing: 'ease-in-out',
          pseudoElement: '::after',
        },
      );
    }
  }, [roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, ANIM_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <span ref={textRef} className={styles.role_name}>
      {roles[roleIndex]}
    </span>
  );
}

export default AnimatedRole;
