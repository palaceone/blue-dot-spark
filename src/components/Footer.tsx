import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Dribbble size={20} />, href: '#', label: 'Dribbble' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Projekty', href: '#projects' },
    { name: 'O Nas', href: '#about' },
    { name: 'Opinie', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' }
  ];

  const services = [
    'Identyfikacja Wizualna',
    'Projektowanie Logo',
    'Projekt Opakowań',
    'Projektowanie Stron',
    'Materiały Drukowane',
    'Zasoby Cyfrowe'
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/20 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">WAVES</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tworzymy minimalistyczne, efektowne projekty graficzne i treści wideo, 
              które transformują marki i przynoszą rezultaty. Twoja wizja, nasza ekspertyza.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Szybkie Linki</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Usługi</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">hello@wavesstudio.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Nowy Dwór Mazowiecki</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="mt-6 px-6 py-3 bg-gradient-primary text-white font-medium rounded-full shadow-primary hover:shadow-accent transition-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('#contact')}
            >
              Rozpocznij Projekt
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} WAVES Studio. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Polityka Prywatności
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Regulamin
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Polityka Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;