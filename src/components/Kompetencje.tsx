import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Video, Camera, Layers, Brush, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const Kompetencje = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { 
            y: 80, 
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.15
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const kompetencje = [
    {
      title: 'Projekty Logo',
      description: 'Tworzenie unikalnych i zapadających w pamięć logo, które odzwierciedlają tożsamość Twojej marki.',
      icon: <Brush className="text-white" size={28} />,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Identyfikacja wizualna', 'Wersje kolorystyczne', 'Adaptacje różnych formatów']
    },
    {
      title: 'Grafika Reklamowa',
      description: 'Projektowanie materiałów promocyjnych dla mediów drukowanych i cyfrowych.',
      icon: <Palette className="text-white" size={28} />,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Ulotki i broszury', 'Banery internetowe', 'Materiały POS']
    },
    {
      title: 'Produkcja Video',
      description: 'Kompleksowa produkcja treści wideo - od koncepcji po postprodukcję.',
      icon: <Video className="text-white" size={28} />,
      gradient: 'from-red-500 to-orange-500',
      features: ['Filmy promocyjne', 'Social media content', 'Animacje 2D/3D']
    },
    {
      title: 'Fotografia Produktowa',
      description: 'Profesjonalne sesje zdjęciowe produktów dla e-commerce i marketingu.',
      icon: <Camera className="text-white" size={28} />,
      gradient: 'from-green-500 to-teal-500',
      features: ['Zdjęcia produktowe', 'Lifestyle photography', 'Obróbka zdjęć']
    },
    {
      title: 'Projektowanie Opakowań',
      description: 'Kreatywne rozwiązania w zakresie designu opakowań i etykiet.',
      icon: <Layers className="text-white" size={28} />,
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Opakowania produktów', 'Etykiety', 'Design funkcjonalny']
    },
    {
      title: 'Grafika Koncertowa',
      description: 'Specjalizujemy się w projektowaniu plakatów i materiałów dla wydarzeń muzycznych.',
      icon: <Zap className="text-white" size={28} />,
      gradient: 'from-yellow-500 to-red-500',
      features: ['Plakaty koncertowe', 'Merchandise', 'Visual identity tour']
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="kompetencje" ref={sectionRef} className="section-padding bg-secondary/5">
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
            Czym Się Zajmujemy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy kompleksowe usługi w zakresie projektowania graficznego i produkcji video 
            dla firm z Nowego Dworu Mazowieckiego i całego Mazowsza.
          </p>
        </motion.div>

        {/* Kompetencje Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kompetencje.map((item, index) => (
            <motion.div
              key={item.title}
              ref={addToRefs}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-accent group-hover:border-primary/30 color-reveal">
                <CardContent className="p-0">
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        WAVES
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            Potrzebujesz profesjonalnej grafiki lub video?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Skontaktuj Się z Nami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Kompetencje;