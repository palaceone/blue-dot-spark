import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
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
      details: 'kontakt@wavesstudio.pl',
      description: 'Napisz do nas w każdej chwili'
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: 'Telefon',
      details: '+48 123 456 789',
      description: 'Pn-Pt, 9:00-17:00'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Lokalizacja',
      details: 'Nowy Dwór Mazowiecki',
      description: 'Obsługujemy całe Mazowsze'
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
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Stwórzmy Razem
            <br />
            Coś Wyjątkowego
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gotowy na transformację swojej marki? Skontaktuj się z nami i przedyskutujmy, 
            jak możemy tchnąć życie w Twoją wizję.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Skontaktuj się z nami</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-foreground font-medium">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              className="mt-12 p-6 rounded-2xl bg-gradient-primary text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={24} />
                <span className="text-lg font-semibold">Dlaczego My?</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Odpowiedź w ciągu 24 godzin</li>
                <li>✓ Nieograniczone korekty</li>
                <li>✓ 98% satysfakcji klientów</li>
                <li>✓ Doświadczony zespół designerów</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Rozpocznij Swój Projekt</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Imię i Nazwisko *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Twoje imię i nazwisko"
                        required
                        className="bg-input border-border focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Adres Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="twoj@email.com"
                        required
                        className="bg-input border-border focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nazwa Firmy
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nazwa Twojej firmy"
                      className="bg-input border-border focus:border-primary transition-smooth"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Szczegóły Projektu *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Opisz swój projekt, cele i harmonogram..."
                      rows={6}
                      required
                      className="bg-input border-border focus:border-primary transition-smooth resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white font-medium py-6 text-lg shadow-primary hover:shadow-accent transition-bounce disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wysyłanie wiadomości...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={20} />
                        Wyślij Wiadomość
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;