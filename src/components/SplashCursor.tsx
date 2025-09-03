import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Splash {
  id: number;
  x: number;
  y: number;
}

export const SplashCursor = () => {
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    let splashId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only create splash on click for better performance
      return;
    };

    const handleClick = (e: MouseEvent) => {
      const newSplash: Splash = {
        id: splashId++,
        x: e.clientX,
        y: e.clientY,
      };

      setSplashes(prev => [...prev, newSplash]);

      // Remove splash after animation
      setTimeout(() => {
        setSplashes(prev => prev.filter(s => s.id !== newSplash.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {splashes.map(splash => (
        <motion.div
          key={splash.id}
          className="absolute"
          style={{
            left: splash.x - 25,
            top: splash.y - 25,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-sm" />
        </motion.div>
      ))}
    </div>
  );
};