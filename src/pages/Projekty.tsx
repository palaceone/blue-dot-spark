import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink, Play, Camera, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Projekty = () => {
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

  const projektyGraficzne = [
    {
      title: 'Virality - Logo Design',
      category: 'Identyfikacja Wizualna',
      description: 'Nowoczesne logo dla firmy technologicznej z Nowego Dworu Mazowieckiego. Projekt uwzględnia minimalistyczne podejście z elementami symbolizującymi wiralne rozprzestrzenianie się treści.',
      image: '/api/placeholder/600/400',
      icon: <Camera className="text-white" size={24} />,
      technologies: ['Logo Design', 'Brand Identity', 'Corporate Identity'],
      link: '/project/virality-logo'
    },
    {
      title: 'Ecommerce Studio - Brand Identity',
      category: 'Branding',
      description: 'Kompletna identyfikacja wizualna dla studia e-commerce. Projekt zawiera logo, kolorystykę, typografię oraz guidelines dla konsystentnego wykorzystania marki.',
      image: '/api/placeholder/600/400',
      icon: <ExternalLink className="text-white" size={24} />,
      technologies: ['Branding', 'Graphic Design', 'Style Guide'],
      link: '/project/ecommerce-studio'
    }
  ];

  const projektyVideo = [
    {
      title: 'DIHO - Morda Nie Szklanka Tour',
      category: 'Grafika Koncertowa',
      description: 'Kompleksowy projekt graficzny dla trasy koncertowej DIHO "Morda Nie Szklanka". Zawiera plakaty, banery, merchandise oraz materiały promocyjne na social media.',
      image: '/api/placeholder/600/400',
      icon: <Music className="text-white" size={24} />,
      technologies: ['Concert Graphics', 'Poster Design', 'Social Media'],
      link: '/project/diho-tour'
    },
    {
      title: 'WAVES Studio - Showreel 2024',
      category: 'Video Production',
      description: 'Prezentacja najlepszych prac video studia WAVES w formie dynamicznego showreela. Montaż uwzględnia różnorodność projektów - od filmów promocyjnych po animacje.',
      image: '/api/placeholder/600/400',
      icon: <Play className="text-white" size={24} />,
      technologies: ['Video Editing', 'Motion Graphics', 'Sound Design'],
      link: '/project/waves-showreel'
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.button
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ArrowLeft size={20} />
            Powrót do strony głównej
          </motion.button>

          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Nasze Projekty
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Odkryj portfolio naszych najlepszych prac - od projektów graficznych 
              po produkcję video dla klientów z Nowego Dworu Mazowieckiego i okolic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projekty Graficzne */}
      <section ref={sectionRef} className="section-padding">
        <div className="container mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Projekty Graficzne
            </h2>
            <p className="text-lg text-muted-foreground">
              Identyfikacja wizualna, logo, branding i grafika reklamowa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {projektyGraficzne.map((project, index) => (
              <motion.div
                key={project.title}
                ref={addToRefs}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(project.link)}
              >
                <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-primary group-hover:border-primary/30 color-reveal">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    
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
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Projekty Video */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Projekty Video i Grafika Koncertowa
            </h2>
            <p className="text-lg text-muted-foreground">
              Produkcja video, grafika koncertowa i treści multimedialne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projektyVideo.map((project, index) => (
              <motion.div
                key={project.title}
                ref={addToRefs}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(project.link)}
              >
                <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-accent group-hover:border-accent/30 color-reveal">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <Play className="text-white" size={40} />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {project.icon}
                      <span className="text-sm font-medium text-accent">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-smooth">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Potrzebujesz Podobnego Projektu?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami i omówmy, jak możemy pomóc w realizacji 
              Twojego projektu graficznego lub video.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/#contact')}
            >
              Rozpocznij Współpracę
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projekty;