import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Waves, Eye, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import ContactSlideForm from '@/components/ContactSlideForm';

gsap.registerPlugin(ScrollTrigger);

const VirtualityProject = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
    title: 'Virality - Logo Design',
    client: 'Virality.pl',
    category: 'Identyfikacja Wizualna',
    year: '2024',
    duration: '2 tygodnie',
    challenge: 'Stworzyliśmy logo dla firmy będącej inkubatorem innowacji cyfrowych, miejscem gdzie technologia spotyka się z kreatywnością. Działają na styku różnych obszarów internetu, łącząc w sobie elementy agencji, platformy doradczej i inkubatora startupów. Ich celem jest wspieranie projektów i inicjatyw, które przynoszą nową wartość w cyfrowym ekosystemie. Skupiają się na identyfikacji i rozwijaniu potencjału w zakresie cyfrowego biznesu - od platform SaaS po strategie personal branding.',
    solution: 'Zaprojektowaliśmy logo zgodnie ze specyfikacją klienta, które pasuje do profilu biznesu. Wykorzystaliśmy nowoczesne, minimalistyczne formy odzwierciedlające charakter firmy technologicznej działającej w przestrzeni cyfrowej.'
  };

  return (
    <>
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2 hover:bg-accent"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Powrót</span>
              </Button>
            <div className="flex items-center gap-3">
              <Waves className="text-primary" size={20} />
              <span className="font-bold text-lg sm:text-xl">WAVES</span>
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
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 text-gradient">
                {projectDetails.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
                {projectDetails.challenge}
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
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
              className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/lovable-uploads/b2674288-41bd-40a4-9304-16d28f8f89e8.png" 
                alt="Virality Logo Design" 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">Wyzwanie</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {projectDetails.challenge}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Eye className="text-primary flex-shrink-0" size={24} />
                  <span className="font-medium text-sm sm:text-base">Kluczowe cele: Innowacyjność, Cyfrowa transformacja, SaaS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">Rozwiązanie</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {projectDetails.solution}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <TrendingUp className="text-accent flex-shrink-0" size={24} />
                  <span className="font-medium text-sm sm:text-base">Rezultat: Silna identyfikacja wizualna</span>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-2">
                Stwórzmy Razem Coś Wyjątkowego
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
                Gotowy na projekt, który przemieni Twoją markę? Skontaktuj się z nami już dziś.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium"
                onClick={() => setIsContactFormOpen(true)}
              >
                <Users className="mr-2" size={20} />
                Rozpocznij Projekt
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      <ContactSlideForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default VirtualityProject;