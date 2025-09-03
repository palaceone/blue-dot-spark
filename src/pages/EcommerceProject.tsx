import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Palette, ShoppingCart, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const EcommerceProject = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-content', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projectDetails = {
    title: 'Studio ecommerce',
    client: 'Studio ecommerce',
    category: 'Branding',
    year: '2024',
    duration: '8 tygodni',
    challenge: 'Start w e-commerce nigdy nie był tak prosty. Dzięki wieloletniemu doświadczeniu jestem w stanie wprowadzić Cię w branżę handlu internetowego w zaledwie 90 dni. W trakcie całej swojej przygody dostrzegałem rzeczy które umykały innym.',
    solution: 'Teraz całą tą wiedzą mogę podzielić się z Tobą. Zaprojektowaliśmy logo które odzwierciedla prostotę i skuteczność wprowadzania klientów w świat e-commerce.'
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-accent"
            >
              <ArrowLeft size={20} />
              Powrót
            </Button>
            <div className="flex items-center gap-3">
              <Palette className="text-primary" size={24} />
              <span className="font-bold text-xl">WAVES</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              {projectDetails.category}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient">
              {projectDetails.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {projectDetails.challenge}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Klient:</span>
                <span className="ml-2 font-medium">{projectDetails.client}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Rok:</span>
                <span className="ml-2 font-medium">{projectDetails.year}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Czas realizacji:</span>
                <span className="ml-2 font-medium">{projectDetails.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="aspect-video bg-white rounded-2xl flex items-center justify-center shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/f22bf26e-9069-4bc0-a302-db130d188b1b.png"
              alt="Studio ecommerce logo"
              className="max-h-32 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Wyzwanie</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {projectDetails.challenge}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <ShoppingCart className="text-primary" size={24} />
                <span className="font-medium">Focus: E-commerce, Branding, Profesjonalizm</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Rozwiązanie</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {projectDetails.solution}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <TrendingUp className="text-accent" size={24} />
                <span className="font-medium">Rezultat: Kompleksowa identyfikacja wizualna</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Next Project CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 pb-2">
              Stwórzmy Razem Coś Wyjątkowego
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gotowy na projekt, który przemieni Twoją markę? Skontaktuj się z nami już dziś.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-medium"
              onClick={() => navigate('/#contact')}
            >
              <Users className="mr-2" size={20} />
              Rozpocznij Projekt
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceProject;