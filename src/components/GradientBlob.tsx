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
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 180, 360],
      } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
      }}
    />
  );
};