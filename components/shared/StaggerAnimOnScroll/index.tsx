import { useInView } from 'react-intersection-observer';
import { motion, Variant } from 'framer-motion';
import { ReactNode } from 'react';

type StaggerItemProps = {
  show?: Variant;
  hidden?: Variant;
  children: ReactNode;
};

export function StaggerItem({ children, show, hidden }: StaggerItemProps) {
  return (
    <motion.div
      initial="hidden"
      variants={{
        hidden: hidden || { opacity: 0, x: -300 },
        show: show || { opacity: 1, x: 0 },
      }}>
      {children}
    </motion.div>
  );
}

type StaggerAnimOnScrollProps = {
  children: ReactNode;
};

function StaggerAnimOnScroll({ children }: StaggerAnimOnScrollProps) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      animate={inView ? 'show' : 'hidden'}
      initial="hidden"
      exit="hidden"
      variants={{
        hidden: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      ref={ref}>
      {children}
    </motion.div>
  );
}

export default StaggerAnimOnScroll;
