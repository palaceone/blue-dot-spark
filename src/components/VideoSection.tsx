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
        gsap.fromTo(card, {
          y: 80,
          opacity: 0,
          scale: 0.9
        }, {
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
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const videos = [{
    title: 'CarHunter - Reel',
    description: 'Profesjonalna animacja promocyjna dla branży motoryzacyjnej',
    vimeoId: '1079354732',
    vimeoHash: '87edcda862',
    category: 'Reel Promocyjny',
    icon: <Video className="text-primary" size={20} />
  }, {
    title: 'CarHunter - Auta z małą akcyzą',
    description: 'Animowany materiał informacyjny o ofertach samochodowych',
    vimeoId: '1077913463',
    vimeoHash: '0d66a10d4e',
    category: 'Content Marketing',
    icon: <Play className="text-accent" size={20} />
  }, {
    title: 'Rolka Popeyes',
    description: 'Dynamiczna animacja dla popularnej sieci restauracji',
    vimeoId: '1078299214',
    vimeoHash: '70d3ad0663',
    category: 'Social Media',
    icon: <Video className="text-primary" size={20} />
  }];
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  return <section id="videos" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
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
          {videos.map((video, index) => <motion.div key={video.title} ref={addToRefs} className="group cursor-pointer" whileHover={{
          y: -8,
          scale: 1.02
        }} transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 300
        }}>
              <Card className="bg-card border-border overflow-hidden h-full transition-smooth hover:shadow-primary group-hover:border-primary/30 hover-lift magnetic-hover shimmer">
                {/* Video Embed Container */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <iframe src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.vimeoHash}&badge=0&autopause=0&player_id=0&app_id=58479`} className="w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen title={video.title} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
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
            </motion.div>)}
        </div>

        {/* Upload Instructions */}
        <motion.div className="mt-16 text-center" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }}>
          
        </motion.div>
      </div>
    </section>;
};
export default VideoSection;