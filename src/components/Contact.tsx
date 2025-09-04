import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle, Circle, MessageSquare, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
      });

      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      details: 'pawel@waves.cafe',
      description: 'Napisz do nas w każdej chwili'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-white"
            />
            <span className="text-white font-medium">
              Jesteśmy otwarci na nowe projekty
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Stwórzmy Razem
            <br />
            Coś Wyjątkowego
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gwarantujemy odpowiedź w ciągu 24 godzin. Skontaktuj się z nami i przedyskutujmy, 
            jak możemy tchnąć życie w Twoją wizję.
          </p>
        </motion.div>

        {/* Contact Information - Centered */}
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Masz pomysł na projekt? Chcesz omówić współpracę? Skontaktuj się z nami w wybrany przez siebie sposób.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                      <Mail className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:pawel@waves.cafe" className="text-primary hover:underline">
                          pawel@waves.cafe
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                      <MessageSquare className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Czas odpowiedzi</p>
                        <p className="text-muted-foreground">Odpowiadamy w ciągu 24 godzin</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                      <Building className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Nowe projekty</p>
                        <p className="text-muted-foreground">Zawsze otwarci na ciekawe wyzwania</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Każdy projekt traktujemy indywidualnie. Napisz do nas o swojej wizji!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;