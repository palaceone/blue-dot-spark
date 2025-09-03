import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Waves, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SplashCursor } from './SplashCursor';
import { GradientBlob } from './GradientBlob';
import { TextReveal, SplitText } from './TextReveal';
import { FloatingParticles } from './FloatingParticles';
import { MagneticButton } from './MagneticButton';
import { InteractiveCard } from './InteractiveCard';
import BlurText from './BlurText';

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
      <SplashCursor />
      <FloatingParticles count={40} />
      
      {/* Enhanced Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 z-0 opacity-30">
        {generateAnimatedGrid()}
      </div>

      {/* Enhanced Floating Animated Blobs */}
      <div className="absolute inset-0 z-5">
        <GradientBlob className="w-96 h-96 top-1/4 left-1/4" />
        <GradientBlob className="w-64 h-64 bottom-1/4 right-1/3" />
        <GradientBlob className="w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
            <div ref={waveRef} className="relative group">
              <div className="w-40 h-40 flex items-center justify-center relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img 
                    src="/lovable-uploads/ee759693-0429-4705-a01a-923ee065591a.png" 
                    alt="Logo" 
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </InteractiveCard>

        {/* Enhanced Main Text with Split Animation */}
        <div ref={textRef} className="max-w-5xl mx-auto">
          <div className="mb-8">
            <BlurText
              text="Grafika & Video"
              delay={100}
              animateBy="words"
              direction="top"
              className="hero-text text-gradient text-center"
              onAnimationComplete={() => console.log('Grafika & Video animation completed!')}
            />
          </div>
          
          <TextReveal delay={1.5} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tworzymy projekty graficzne i treści wideo, które 
              <span className="text-white font-medium"> robią wrażenie</span> w Nowym Dworze Mazowieckim i okolicach.
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