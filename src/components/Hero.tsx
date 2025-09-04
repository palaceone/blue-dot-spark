import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Waves, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SplashCursor } from './SplashCursor';
import { GradientBlob } from './GradientBlob';
import { TextReveal } from './TextReveal';
import { FloatingParticles } from './FloatingParticles';
import { MagneticButton } from './MagneticButton';
import { InteractiveCard } from './InteractiveCard';
import ShinyText from './ShinyText';

const Hero = () => {
  const waveRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Enable GPU acceleration
    gsap.set([waveRef.current, textRef.current], {
      force3D: true,
      transformStyle: "preserve-3d"
    });

    // GSAP animations for the wave logo - optimized for mobile
    if (waveRef.current) {
      gsap.fromTo(waveRef.current, 
        { scale: 0, rotation: 0, opacity: 0 },
        { 
          scale: 1, 
          rotation: isMobile ? 180 : 360, // Reduce rotation on mobile
          opacity: 1,
          duration: isMobile ? 1.5 : 2, // Shorter on mobile
          ease: 'power3.out',
          delay: 0.3
        }
      );

      // Simplified floating animation for mobile
      if (!isMobile) {
        gsap.to(waveRef.current, {
          y: -15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        });
      }
    }

    // Text reveal animation - simplified for mobile
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { y: isMobile ? 30 : 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: isMobile ? 0.8 : 1.2, // Faster on mobile
          stagger: isMobile ? 0.1 : 0.15, 
          ease: 'power3.out',
          delay: 0.8
        }
      );
    }

    // Skip heavy grid animations on mobile
    if (gridRef.current && !isMobile) {
      const dots = gridRef.current.querySelectorAll('.grid-dot');
      if (dots.length > 0) {
        gsap.fromTo(dots,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.3,
            duration: 0.5,
            stagger: {
              amount: 2,
              from: "center",
              grid: "auto"
            },
            ease: 'power2.out'
          }
        );
      }
    }
  }, [isMobile]);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate animated grid - optimized for mobile
  const generateAnimatedGrid = () => {
    if (isMobile) return []; // Skip grid on mobile for performance
    
    const elements = [];
    
    // Reduced elements for better performance
    // Vertical lines - reduced from 25 to 15
    for (let i = 0; i < 15; i++) {
      elements.push(
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-pulse will-change-opacity"
          style={{
            left: `${(i / 14) * 100}%`,
            height: '100%',
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${4 + Math.random()}s`,
            transform: 'translate3d(0,0,0)' // GPU acceleration
          }}
        />
      );
    }
    
    // Horizontal lines - reduced from 20 to 12
    for (let i = 0; i < 12; i++) {
      elements.push(
        <div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-pulse will-change-opacity"
          style={{
            top: `${(i / 11) * 100}%`,
            width: '100%',
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + Math.random()}s`,
            transform: 'translate3d(0,0,0)' // GPU acceleration
          }}
        />
      );
    }
    
    // Intersection dots - reduced from 50 to 20
    for (let i = 0; i < 20; i++) {
      elements.push(
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-ping will-change-transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: 'translate3d(0,0,0)' // GPU acceleration
          }}
        />
      );
    }
    
    return elements;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <SplashCursor />
      <FloatingParticles count={isMobile ? 15 : 40} />
      
      {/* Optimized Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 z-0 opacity-20 will-change-auto">
        {generateAnimatedGrid()}
      </div>

      {/* Optimized Floating Animated Blobs */}
      <div className="absolute inset-0 z-5">
        <GradientBlob 
          className={isMobile ? "w-64 h-64 top-1/4 left-1/4" : "w-96 h-96 top-1/4 left-1/4"} 
          animate={!isMobile}
        />
        {!isMobile && <GradientBlob className="w-64 h-64 bottom-1/4 right-1/3" />}
        <GradientBlob 
          className={isMobile ? "w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} 
          animate={!isMobile}
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,transparent_50%)] z-10" />

      <div className="container mx-auto px-4 text-center relative z-20">
        {/* Enhanced Logo */}
        <InteractiveCard className="flex items-center justify-center mb-16">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div ref={waveRef} className="relative group will-change-transform">
              <div className={`${isMobile ? 'w-32 h-32' : 'w-40 h-40'} flex items-center justify-center relative`}>
                <motion.div
                  animate={!isMobile ? { 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: 'translate3d(0,0,0)' }}
                >
                  <img 
                    src="/lovable-uploads/ee759693-0429-4705-a01a-923ee065591a.png" 
                    alt="Logo" 
                    className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32'} object-contain group-hover:scale-110 transition-transform duration-300 will-change-transform`}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                {!isMobile && <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />}
              </div>
            </div>
          </motion.div>
        </InteractiveCard>

        <div ref={textRef} className="max-w-5xl mx-auto">
          <div className="mb-8">
            <motion.h1 
              className="hero-text text-gradient text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Grafika & Video
            </motion.h1>
          </div>
          
          <TextReveal delay={1.5} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tworzymy projekty graficzne i treści wideo, które{' '}
              <ShinyText 
                text="robią wrażenie" 
                speed={2} 
                className="text-white font-medium"
              />{' '}w Nowym Dworze Mazowieckim i okolicach.
            </p>
          </TextReveal>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <MagneticButton 
              className="glass-effect hover:bg-black/20 border border-gray-600 text-white hover:border-gray-500 px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full backdrop-blur-md gradient-outline hover:shadow-lg flex items-center justify-center"
              onClick={scrollToProjects}
            >
              <Play className="mr-2" size={18} />
              Zobacz Nasze Prace
            </MagneticButton>
            
            <MagneticButton 
              className="glass-effect hover:bg-white/5 border border-white/20 text-white hover:border-primary/40 px-8 py-4 text-base font-medium transition-all duration-300 rounded-full backdrop-blur-md gradient-outline hover:shadow-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Rozpocznij Projekt
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;