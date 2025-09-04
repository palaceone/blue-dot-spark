import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">Polityka Prywatności</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-accent"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Informacje ogólne
                    </h3>
                    <p className="leading-relaxed">
                      WAVES Studio (nazywane dalej "my", "nas", "nasze") szanuje Twoją prywatność 
                      i zobowiązuje się do ochrony Twoich danych osobowych.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Jakie dane zbieramy
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Jako WAVES Studio możemy zbierać następujące informacje wyłącznie 
                      po kontakcie mailowym w celu świadczenia usług:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adres email</li>
                      <li>Numer telefonu (jeśli zostanie podany)</li>
                      <li>Adres (jeśli będzie niezbędny do realizacji usługi)</li>
                      <li>Inne informacje podane dobrowolnie w celu realizacji projektu</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Czego NIE zbieramy
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Jako WAVES Studio NIE zbieramy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adresów IP użytkowników</li>
                      <li>Danych o sesjach logowania na stronę</li>
                      <li>Cookies śledzących</li>
                      <li>Danych analitycznych bez Twojej zgody</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Hosting i usługi trzecie
                    </h3>
                    <p className="leading-relaxed">
                      Nasza strona internetowa jest hostowana przez Spaceship. 
                      Spaceship jako dostawca hostingu może zbierać pewne dane techniczne 
                      (takie jak adresy IP) w ramach świadczenia usług hostingowych. 
                      Zachęcamy do zapoznania się z polityką prywatności Spaceship.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Cel przetwarzania danych
                    </h3>
                    <p className="leading-relaxed">
                      Zbierane przez nas dane wykorzystujemy wyłącznie w celu:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                      <li>Kontaktu z klientami</li>
                      <li>Realizacji zamówionych usług</li>
                      <li>Wysyłania materiałów związanych z projektem</li>
                      <li>Prowadzenia niezbędnej dokumentacji biznesowej</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Kontakt
                    </h3>
                    <p className="leading-relaxed">
                      W przypadku pytań dotyczących polityki prywatności, 
                      skontaktuj się z nami pod adresem: 
                      <a 
                        href="mailto:pawel@waves.cafe" 
                        className="text-primary hover:underline ml-1"
                      >
                        pawel@waves.cafe
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border">
                <Button
                  onClick={onClose}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Rozumiem
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;