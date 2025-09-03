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
      gradient: 'from-gray-800 to-gray-900',
      features: ['Identyfikacja wizualna', 'Wersje kolorystyczne', 'Adaptacje różnych formatów']
    },
    {
      title: 'Grafika Reklamowa',
      description: 'Projektowanie materiałów promocyjnych dla mediów drukowanych i cyfrowych.',
      icon: <Palette className="text-white" size={28} />,
      gradient: 'from-gray-700 to-black',
      features: ['Ulotki i broszury', 'Banery internetowe', 'Materiały POS']
    },
    {
      title: 'Animacje & Video',
      description: 'Kompleksowa produkcja treści wideo - od koncepcji po postprodukcję.',
      icon: <Video className="text-white" size={28} />,
      gradient: 'from-black to-gray-800',
      features: ['Filmy promocyjne', 'Social media content', 'Animacje 2D/3D']
    },
    {
      title: 'Projektowanie Opakowań',
      description: 'Kreatywne rozwiązania w zakresie designu opakowań i etykiet.',
      icon: <Layers className="text-white" size={28} />,
      gradient: 'from-gray-900 to-black',
      features: ['Opakowania produktów', 'Etykiety', 'Design funkcjonalny']
    },
    {
      title: 'Grafika Koncertowa',
      description: 'Specjalizujemy się w projektowaniu plakatów i materiałów dla wydarzeń muzycznych.',
      icon: <Zap className="text-white" size={28} />,
      gradient: 'from-gray-600 to-gray-900',
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

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kompetencje.map((item, index) => (
            <motion.div
              key={item.title}
              ref={addToRefs}
              className="group cursor-pointer"
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="bg-card/50 border border-white/10 rounded-2xl overflow-hidden h-full backdrop-blur-md hover:bg-card/70 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Animated Header with Gradient */}
                <div className={`bg-gradient-to-br ${item.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="text-gradient text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Interactive Features List */}
                  <ul className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Action */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className="text-sm text-primary font-medium">Dowiedz się więcej →</span>
                  </motion.div>
                </div>
              </div>
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