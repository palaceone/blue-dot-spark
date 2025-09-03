import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  animate?: boolean;
}

export const GradientBlob = ({ className = "", animate = true }: GradientBlobProps) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={animate ? {
        x: [0, 50, -25, 0],
        y: [0, -50, 25, 0],
        scale: [1, 1.1, 0.9, 1],
      } : {}}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
      }}
    />
  );
};