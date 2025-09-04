import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactSlideFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSlideForm = ({ isOpen, onClose }: ContactSlideFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
      });

      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Błąd",
        description: "Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Slide Form */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gradient">Rozpocznij Projekt</h2>
                  <p className="text-muted-foreground mt-1">Opowiedz nam o swojej wizji</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-accent"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Contact Information */}
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
                      <a href="mailto:kontakt@example.com" className="text-primary hover:underline">
                        kontakt@example.com
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

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Odpowiemy na Twoją wiadomość w ciągu 24 godzin
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactSlideForm;