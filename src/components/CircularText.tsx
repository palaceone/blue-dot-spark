import React from 'react';
import { motion } from 'framer-motion';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

export const CircularText = ({
  text,
  spinDuration = 20,
  onHover,
  className = ''
}: CircularTextProps) => {
  const characters = text.split('');
  const circumference = 2 * Math.PI * 50; // radius of 50
  const characterAngle = 360 / characters.length;

  const getHoverAnimation = () => {
    switch (onHover) {
      case 'slowDown':
        return { rotate: [0, 360] };
      case 'speedUp':
        return { rotate: [0, 360] };
      case 'pause':
        return { rotate: 0 };
      case 'goBonkers':
        return { rotate: [0, 360] };
      default:
        return {};
    }
  };

  const getHoverTransition = () => {
    switch (onHover) {
      case 'slowDown':
        return { duration: spinDuration * 2, repeat: Infinity, ease: 'linear' as const };
      case 'speedUp':
        return { duration: spinDuration / 2, repeat: Infinity, ease: 'linear' as const };
      case 'pause':
        return { duration: 0.3 };
      case 'goBonkers':
        return { duration: 0.5, repeat: Infinity, ease: 'linear' as const };
      default:
        return {};
    }
  };

  const normalAnimation = {
    rotate: [0, 360]
  };

  const normalTransition = {
    duration: spinDuration,
    repeat: Infinity,
    ease: 'linear' as const
  };

  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={normalAnimation}
        transition={normalTransition}
        whileHover={onHover ? { ...getHoverAnimation(), transition: getHoverTransition() } : undefined}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
        >
          <defs>
            <path
              id="circle"
              d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
          </defs>
          <text className="text-xs fill-current">
            <textPath href="#circle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
};