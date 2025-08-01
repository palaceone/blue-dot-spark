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
      name: 'Sarah Chen',
      position: 'CEO, TechFlow',
      review: 'Blue Dot completely transformed our brand identity. The minimalistic approach they took perfectly captured our vision while significantly improving our market presence.',
      rating: 5,
      avatar: '🚀'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Founder, Artisan Goods',
      review: 'Working with Blue Dot was a game-changer. Their packaging design increased our sales by 65% in just three months. Incredible attention to detail!',
      rating: 5,
      avatar: '☕'
    },
    {
      name: 'Emily Johnson',
      position: 'Marketing Director, InnovateLab',
      review: 'The team at Blue Dot delivered beyond our expectations. Their strategic approach to design thinking helped us connect with our audience in ways we never imagined.',
      rating: 5,
      avatar: '💡'
    },
    {
      name: 'David Kim',
      position: 'Creative Director, Pulse Media',
      review: 'Exceptional work! Blue Dot\'s ability to translate complex ideas into simple, elegant designs is unmatched. Our conversion rates have never been higher.',
      rating: 5,
      avatar: '🎨'
    },
    {
      name: 'Lisa Thompson',
      position: 'Brand Manager, EcoVibe',
      review: 'Professional, creative, and results-driven. Blue Dot helped us launch our sustainable brand with designs that truly resonate with our eco-conscious audience.',
      rating: 5,
      avatar: '🌱'
    },
    {
      name: 'Alex Morgan',
      position: 'Startup Founder, NextGen',
      review: 'From concept to execution, Blue Dot was with us every step of the way. Their designs helped us secure our Series A funding by making our vision tangible.',
      rating: 5,
      avatar: '⚡'
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
            Client Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with Blue Dot Studio.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              ref={addToRefs}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card border-border h-full transition-smooth hover:shadow-primary hover:border-primary/30 relative overflow-hidden">
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
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-gradient mb-2">5★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;