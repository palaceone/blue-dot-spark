import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const faqs = [
    {
      question: 'What services does Blue Dot Studio offer?',
      answer: 'We specialize in comprehensive graphic design services including brand identity development, logo design, packaging design, web design, print materials, and digital assets. Our focus is on creating minimalistic, impactful designs that drive results for your business.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A logo design typically takes 1-2 weeks, while a complete brand identity project can take 3-4 weeks. We always provide detailed timelines during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'What is your design process?',
      answer: 'Our process consists of four key phases: Discovery (understanding your needs and goals), Strategy (developing the creative approach), Design (creating and refining concepts), and Launch (finalizing and delivering your assets). We involve you at every step to ensure the final result exceeds your expectations.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Absolutely! We work with startups, small businesses, and established companies alike. Our approach is tailored to each client\'s specific needs, budget, and goals. Whether you\'re launching a new venture or rebranding an existing business, we\'re here to help.'
    },
    {
      question: 'What makes Blue Dot Studio different?',
      answer: 'Our commitment to minimalistic design that converts sets us apart. We don\'t just create beautiful designs—we create strategic visual solutions that drive engagement, increase conversions, and deliver measurable results for your business.'
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes, we include multiple revision rounds in all our packages. We work closely with you to refine the design until it perfectly matches your vision. Our goal is to ensure you\'re completely satisfied with the final result.'
    },
    {
      question: 'Can you help with brand strategy?',
      answer: 'Definitely! Beyond visual design, we offer brand strategy consulting to help you define your brand positioning, messaging, and visual identity guidelines. We ensure your brand resonates with your target audience and stands out in the market.'
    },
    {
      question: 'What file formats do you deliver?',
      answer: 'We provide all final designs in multiple formats including vector files (AI, EPS), high-resolution raster files (PNG, JPG), and web-optimized formats. You\'ll receive a complete package that covers all your current and future needs.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="section-padding bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about 
            working with Blue Dot Studio.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card hover:border-primary/30 transition-smooth"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We'd love to hear from you.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;