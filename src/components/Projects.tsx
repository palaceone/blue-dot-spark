import React from 'react';
import { motion } from 'framer-motion';
import { CircularGallery } from './CircularGallery';
import { MagneticButton } from './MagneticButton';

const Projects = () => {
  const projectItems = [
    {
      image: '/api/placeholder/600/400',
      text: 'Virality - Logo Design',
      link: '/project/virality-logo'
    },
    {
      image: '/api/placeholder/600/400',
      text: 'Ecommerce Studio',
      link: '/project/ecommerce-studio'
    },
    {
      image: '/api/placeholder/600/400',
      text: 'DIHO - Grafika Koncertowa',
      link: '/project/diho-tour'
    },
    {
      image: '/api/placeholder/600/400',
      text: 'Brand Identity - Startup',
      link: '/projekty'
    },
    {
      image: '/api/placeholder/600/400',
      text: 'Video Campaign - Local Business',
      link: '/projekty'
    },
    {
      image: '/api/placeholder/600/400',
      text: 'Event Graphics - Festival',
      link: '/projekty'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Wybrane Prace
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Odkryj nasze najlepsze projekty w interaktywnej galerii 3D
          </p>
        </motion.div>

        {/* Circular Gallery */}
        <CircularGallery
          items={projectItems}
          bend={3}
          textColor="hsl(var(--foreground))"
          borderRadius={0.1}
          scrollSpeed={2}
          scrollEase={0.05}
          className="mb-16"
        />

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Gotowy zobaczyć tutaj swój projekt?
          </motion.p>
          
          <MagneticButton
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 border border-primary/30"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Rozpocznij Swój Projekt</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;