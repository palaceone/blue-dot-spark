import React from 'react';
import { motion } from 'framer-motion';

interface LogoItem {
  src?: string;
  content?: React.ReactNode;
  alt?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoLoop = ({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className = '',
  style
}: LogoLoopProps) => {
  const actualSpeed = direction === 'left' ? speed : -speed;
  const duration = (logos.length * (logoHeight + gap)) / Math.abs(actualSpeed);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, ...style }}
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor || 'hsl(var(--background))'}, transparent)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor || 'hsl(var(--background))'}, transparent)`
            }}
          />
        </>
      )}
      
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -100 * logos.length] : [0, 100 * logos.length]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear'
        }}
        whileHover={pauseOnHover ? { x: 0 } : undefined}
        style={{ gap: `${gap}px` }}
      >
        {/* Render logos twice for seamless loop */}
        {[...Array(2)].map((_, setIndex) =>
          logos.map((logo, index) => (
            <motion.div
              key={`${setIndex}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: `${logoHeight}px` }}
              whileHover={scaleOnHover ? { scale: 1.1 } : undefined}
              transition={{ duration: 0.2 }}
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || `Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  style={{ height: `${logoHeight}px` }}
                />
              ) : (
                logo.content
              )}
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};