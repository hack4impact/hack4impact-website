import { useInView } from 'react-intersection-observer';
import { motion, Variant } from 'framer-motion';
import { ReactNode } from 'react';

type StaggerItemProps = {
  animShow?: Variant;
  animHidden?: Variant;
  children: ReactNode;
};

export function StaggerItem({ children, animShow, animHidden }: StaggerItemProps) {
  return (
    <motion.div
      initial="hidden"
      variants={{
        hidden: animHidden || { opacity: 0, x: -300 },
        show: animShow || { opacity: 1, x: 0 },
      }}>
      {children}
    </motion.div>
  );
}

type StaggerAnimOnScrollProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

function StaggerAnimOnScroll({ children, className }: StaggerAnimOnScrollProps) {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px -50px 50px',
    threshold: 0,
  });

  return (
    <motion.div
      animate={inView ? 'show' : 'hidden'}
      initial="hidden"
      exit="hidden"
      className={className}
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
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
