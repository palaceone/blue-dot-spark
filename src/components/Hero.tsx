import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Waves, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const waveRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for the wave logo
    if (waveRef.current) {
      gsap.fromTo(waveRef.current, 
        { scale: 0, rotation: 0, opacity: 0 },
        { 
          scale: 1, 
          rotation: 360, 
          opacity: 1,
          duration: 2, 
          ease: 'power3.out',
          delay: 0.3
        }
      );

      // Floating animation
      gsap.to(waveRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }

    // Text reveal animation
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'power3.out',
          delay: 0.8
        }
      );
    }

    // Animated grid
    if (gridRef.current) {
      const dots = gridRef.current.querySelectorAll('.grid-dot');
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
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate animated grid
  const generateAnimatedGrid = () => {
    const elements = [];
    
    // Vertical lines
    for (let i = 0; i < 25; i++) {
      elements.push(
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"
          style={{
            left: `${(i / 24) * 100}%`,
            height: '100%',
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      );
    }
    
    // Horizontal lines
    for (let i = 0; i < 20; i++) {
      elements.push(
        <div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"
          style={{
            top: `${(i / 19) * 100}%`,
            width: '100%',
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      );
    }
    
    // Intersection dots
    for (let i = 0; i < 50; i++) {
      elements.push(
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      );
    }
    
    return elements;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 z-0 opacity-40">
        {generateAnimatedGrid()}
      </div>

      {/* Floating Animated Orb */}
      <div className="absolute inset-0 z-5">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] top-1/4 left-1/4" />
        <div className="absolute w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-[float_12s_ease-in-out_infinite_reverse] bottom-1/4 right-1/3" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-gray-900/50 z-10" />

      <div className="container mx-auto px-4 text-center relative z-20">
        {/* Waves Logo */}
        <motion.div 
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div ref={waveRef} className="relative group">
            <div className="w-16 h-16 flex items-center justify-center relative">
              <Waves 
                className="text-white text-4xl group-hover:text-blue-400 transition-colors duration-500" 
                size={48}
              />
              <div className="absolute inset-0 bg-white/5 rounded-full blur-lg group-hover:bg-blue-400/20 transition-all duration-500" />
            </div>
          </div>
          <motion.h1 
            className="ml-6 text-5xl font-bold text-white tracking-wider"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            WAVES
          </motion.h1>
        </motion.div>

        {/* Main Text */}
        <div ref={textRef} className="max-w-5xl mx-auto">
          <h2 className="hero-text text-gradient mb-8">
            Grafika
            <br />
            <span className="text-white">& Video</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tworzymy projekty graficzne i treści wideo, które 
            <span className="text-white font-medium"> robią wrażenie</span> w Nowym Dworze Mazowieckim i okolicach.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-medium transition-all duration-300 group"
              onClick={scrollToProjects}
            >
              <Play className="mr-2 group-hover:text-primary transition-colors duration-300" size={20} />
              Zobacz Nasze Prace
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover:bg-white/10 border border-white/20 text-white hover:border-white/40 px-10 py-6 text-lg font-medium transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Rozpocznij Projekt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;