import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
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
            duration: 0.7,
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

  const videos = [
    {
      title: 'DIHO - Morda Nie Szklanka Tour',
      description: 'Animacja promocyjna koncertu z dynamicznymi elementami graficznymi',
      vimeoId: '123456789', // Placeholder ID
      category: 'Animacja Koncertowa',
      icon: <Video className="text-primary" size={20} />
    },
    {
      title: 'Ecommerce Studio - Brand Video',
      description: 'Animowana prezentacja identyfikacji wizualnej marki',
      vimeoId: '987654321', // Placeholder ID
      category: 'Brand Animation',
      icon: <Play className="text-accent" size={20} />
    },
    {
      title: 'Virality - Logo Animation',
      description: 'Dynamiczna animacja logo z efektami świetlnymi',
      vimeoId: '456789123', // Placeholder ID
      category: 'Logo Animation',
      icon: <Video className="text-primary" size={20} />
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="videos" ref={sectionRef} className="section-padding bg-muted/30">
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
            Animacje & Video
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ożyw swoją markę dzięki profesjonalnym animacjom i materiałom wideo, 
            które przykują uwagę i zapadną w pamięć.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              ref={addToRefs}
              className="group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-primary group-hover:border-primary/30 hover-lift magnetic-hover shimmer">
                {/* Video Embed Container */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  {/* Placeholder for Vimeo embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                      <p className="text-white/70 text-sm">
                        Vimeo Video #{video.vimeoId}
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment and replace with actual Vimeo IDs when ready */}
                  {/* 
                  <iframe 
                    src={`https://player.vimeo.com/video/${video.vimeoId}`}
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title={video.title}
                  />
                  */}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {video.icon}
                    <span className="text-sm font-medium text-primary">
                      {video.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {video.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upload Instructions */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Jak dodać swoje filmy?
            </h3>
            <p className="text-muted-foreground mb-4">
              1. Wgraj swoje filmy na Vimeo.com<br/>
              2. Skopiuj ID filmu z URL (np. vimeo.com/123456789)<br/>
              3. Zastąp placeholder ID w kodzie swoimi prawdziwymi ID filmów
            </p>
            <code className="text-sm bg-muted p-2 rounded text-accent">
              vimeoId: 'twoje_id_filmu'
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;