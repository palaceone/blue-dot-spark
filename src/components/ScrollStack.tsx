import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const ScrollStackItem = ({ children, className = '', index = 0 }: ScrollStackItemProps) => {
  return (
    <motion.div
      className={`mb-8 ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStack = ({
  children,
  className = ''
}: ScrollStackProps) => {
  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child, index) => (
        <ScrollStackItem key={index} index={index}>
          {child}
        </ScrollStackItem>
      ))}
    </div>
  );
};