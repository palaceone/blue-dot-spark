import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Zap, Palette, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { InteractiveCard } from './InteractiveCard';
import { MagneticButton } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: 'Virality - Logo Design',
      category: 'Identyfikacja Wizualna',
      description: 'Kompleksowy projekt logo dla firmy technologicznej z Nowego Dworu Mazowieckiego, uwzględniający nowoczesne trendy w designie.',
      image: '/api/placeholder/600/400',
      icon: <Zap className="text-primary" size={24} />,
      results: '+180% Rozpoznawalność Marki'
    },
    {
      title: 'Studio ecommerce',
      category: 'Branding',
      description: 'Start w e-commerce nigdy nie był tak prosty - dzięki wieloletniemu doświadczeniu wprowadzamy klientów w branżę handlu internetowego w zaledwie 90 dni.',
      image: '/lovable-uploads/f22bf26e-9069-4bc0-a302-db130d188b1b.png',
      icon: <Palette className="text-accent" size={24} />,
      results: '90 Dni do Sukcesu'
    },
    {
      title: 'DIHO - Grafika Koncertowa',
      category: 'Grafika Koncertowa',
      description: 'Projekt graficzny dla trasy koncertowej "Morda Nie Szklanka" - plakaty, banery i materiały promocyjne.',
      image: '/api/placeholder/600/400',
      icon: <Target className="text-primary" size={24} />,
      results: '+240% Zaangażowanie'
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-background">
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
            Odkryj, jak pomagamy markom osiągać niezwykłe rezultaty dzięki 
            strategicznemu projektowaniu i kreatywnej doskonałości.
          </p>
        </motion.div>

        {/* Projects Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <InteractiveCard
              key={project.title}
              className="group cursor-pointer"
            >
              <motion.div
                ref={addToRefs}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                onClick={() => {
                  if (project.title === 'Virality - Logo Design') navigate('/project/virality-logo');
                  else if (project.title === 'Studio ecommerce') navigate('/project/ecommerce-studio');
                  else if (project.title === 'DIHO - Grafika Koncertowa') navigate('/project/diho-tour');
                  else navigate('/projekty');
                }}
              >
                <Card className="bg-card border-border overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group-hover:border-primary/50 relative">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                      {/* Animated letter */}
                      <motion.div 
                        className="text-6xl font-bold text-white/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title.charAt(0)}
                      </motion.div>
                      
                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/60 rounded-full"
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${30 + (i % 3) * 20}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-end p-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="text-white" size={20} />
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className="flex items-center gap-3 mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-sm font-medium text-accent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.results}
                      </motion.span>
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink size={14} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </InteractiveCard>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-16"
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