import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { y: 80, opacity: 0, rotationY: -45 },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
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

  const reviews = [
    {
      name: 'CEO Studio Ecommerce',
      position: 'Ecommercowy',
      review: 'Polecam serdecznie, na start otrzymałem kilka konceptów i bazując na Twojej wiedzy wybraliśmy najlepszy pod druk, wiele poprawek ale każda była robiona praktycznie od ręki. Były też problemy z wymiarami pod konkretne social media, również sprawa sprawnie ogarnięta, a cała usługa przystępna cenowo - polecam i w przyszłości będę wracać przy okazji nowych projektów.',
      rating: 5,
      avatar: '🛒'
    },
    {
      name: 'Egzey',
      position: 'Virality',
      review: 'Pomimo licznych poprawek i próśb, Paweł podołał mojemu wyzwaniu. Profesjonalne podejście i cierpliwość w realizacji nawet najbardziej wymagających projektów.',
      rating: 5,
      avatar: '🔥'
    },
    {
      name: 'Bartek W.',
      position: 'Klient',
      review: 'Polecam serdecznie, wszystko o co poprosiłem zostało zrobione perfekcyjnie. Świetny kontakt, szybka realizacja i efekt przewyższający oczekiwania.',
      rating: 5,
      avatar: '✨'
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="reviews" ref={sectionRef} className="section-padding bg-background">
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
            Opinie Klientów
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nie wierz nam na słowo. Oto co mówią nasi klienci o 
            współpracy z WAVES Studio.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              ref={addToRefs}
              className="group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <Card className="bg-card border-border h-full transition-smooth hover:shadow-primary hover:border-primary/30 relative overflow-hidden hover-lift magnetic-hover shimmer">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={48} className="text-primary" />
                </div>

                <CardContent className="p-6 relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{review.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground">Zadowolenie Klientów</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-muted-foreground">Zadowolonych Klientów</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gradient mb-2">5★</div>
            <div className="text-muted-foreground">Średnia Ocena</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;