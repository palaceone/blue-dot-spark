import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  delay?: number;
  stepDuration?: number;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  className?: string;
}

export const BlurText = ({
  text,
  animateBy = 'words',
  direction = 'top',
  delay = 200,
  stepDuration = 0.35,
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  className = ''
}: BlurTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  const variants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -20 : 20,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (isVisible && onAnimationComplete) {
      const totalDelay = items.length * (delay / 1000) + stepDuration;
      const timer = setTimeout(onAnimationComplete, totalDelay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, items.length, delay, stepDuration, onAnimationComplete]);

  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={variants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{
            duration: stepDuration,
            delay: isVisible ? index * (delay / 1000) : 0,
            ease: 'easeOut',
          }}
          className="inline-block"
          style={{ marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
};