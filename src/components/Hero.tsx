import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for the blue dot
    if (dotRef.current) {
      gsap.fromTo(dotRef.current, 
        { scale: 0, rotation: 0 },
        { 
          scale: 1, 
          rotation: 360, 
          duration: 1.5, 
          ease: 'power3.out',
          delay: 0.5
        }
      );

      // Floating animation
      gsap.to(dotRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }

    // Text reveal animation
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          delay: 1
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-float" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Blue Dot Logo */}
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div ref={dotRef} className="relative">
            <div className="w-20 h-20 bg-primary rounded-full shadow-primary relative">
              <div className="absolute inset-2 bg-primary/20 rounded-full animate-ping" />
              <div className="absolute inset-4 bg-white/20 rounded-full" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 text-accent animate-pulse" size={16} />
          </div>
          <motion.h1 
            className="ml-4 text-4xl font-bold text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Blue Dot
          </motion.h1>
        </motion.div>

        {/* Main Text */}
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h2 className="hero-text text-gradient mb-6">
            Design That
            <br />
            <span className="text-white">Converts</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We create minimalistic, impactful designs that turn your vision into 
            <span className="text-primary font-medium"> powerful brands</span> that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-primary transition-bounce"
              onClick={scrollToProjects}
            >
              View Our Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-medium transition-bounce"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;