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
      question: 'Jakie usługi oferuje WAVES Studio?',
      answer: 'Specjalizujemy się w projektowaniu graficznym i produkcji video - identyfikacja wizualna, projekty logo, grafika reklamowa, filmy promocyjne, fotografia produktowa i grafika koncertowa dla artystów z regionu Nowego Dworu Mazowieckiego.'
    },
    {
      question: 'Ile czasu zajmuje realizacja projektu?',
      answer: 'Czas realizacji zależy od złożoności projektu. Projekt logo zajmuje zazwyczaj 1-2 tygodnie, podczas gdy kompletna identyfikacja wizualna może potrwać 3-4 tygodnie. Zawsze przedstawiamy szczegółowy harmonogram na początku współpracy.'
    },
    {
      question: 'Jak wygląda proces projektowania?',
      answer: 'Nasz proces składa się z czterech etapów: Odkrywanie (poznanie Twoich potrzeb), Strategia (opracowanie podejścia kreatywnego), Projektowanie (tworzenie konceptów) i Finalizacja (dostarczenie gotowych materiałów).'
    },
    {
      question: 'Czy pracujecie z firmami każdej wielkości?',
      answer: 'Tak! Współpracujemy ze startupami, małymi firmami i dużymi przedsiębiorstwami. Nasze podejście jest zawsze dostosowane do specyficznych potrzeb, budżetu i celów klienta z regionu mazowieckiego.'
    },
    {
      question: 'Czy zapewniacie korekty projektów?',
      answer: 'Tak, w każdym pakiecie zawarte są korekty. Pracujemy z klientem nad dopracowaniem projektu, aż do pełnej satysfakcji. Naszym celem jest dostarczenie projektu, który w 100% spełnia Twoje oczekiwania.'
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
            Najczęściej Zadawane
            <br />
            Pytania
          </h2>
          <p className="text-xl text-muted-foreground">
            Masz pytania? Mamy odpowiedzi! Znajdź wszystko, co musisz wiedzieć 
            o współpracy z WAVES Studio.
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
            Masz jeszcze pytania? Chętnie na nie odpowiemy.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Skontaktuj się z nami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;