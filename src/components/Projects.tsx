import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Zap, Palette, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

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
      title: 'Ecommerce Studio',
      category: 'Branding',
      description: 'Projekt identyfikacji wizualnej dla studia e-commerce, obejmujący logo, kolorystykę i guidelines.',
      image: '/api/placeholder/600/400',
      icon: <Palette className="text-accent" size={24} />,
      results: '+65% Wzrost Sprzedaży'
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={addToRefs}
              className="group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              onClick={() => {
                if (project.title === 'Virality - Logo Design') navigate('/project/virality-logo');
                else if (project.title === 'Ecommerce Studio') navigate('/project/ecommerce-studio');
                else if (project.title === 'DIHO - Grafika Koncertowa') navigate('/project/diho-tour');
                else navigate('/projekty');
              }}
            >
              <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-primary group-hover:border-primary/30 hover-lift magnetic-hover shimmer">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-end p-4">
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <span className="text-sm font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">
                      {project.results}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-bounce">
                      <ExternalLink size={14} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Gotowy zobaczyć tutaj swój projekt?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Rozpocznij Swój Projekt
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;