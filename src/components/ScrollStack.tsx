import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const ScrollStackItem = ({ children, className = '', index = 0 }: ScrollStackItemProps) => {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -index * 100]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85 + index * 0.03, 0.95, 1]
  );
  
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index * 2]
  );

  return (
    <motion.div
      className={`sticky ${className}`}
      style={{
        y,
        scale,
        rotate,
        top: `${20 + index * 5}%`,
        zIndex: 10 - index
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete
}: ScrollStackProps) => {
  return (
    <div className={`relative ${className}`} style={{ height: '300vh' }}>
      {React.Children.map(children, (child, index) => (
        <ScrollStackItem key={index} index={index}>
          {child}
        </ScrollStackItem>
      ))}
    </div>
  );
};