import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for menu overlay
    if (isMenuOpen) {
      gsap.to('.menu-overlay', {
        duration: 0.4,
        opacity: 1,
        visibility: 'visible',
        ease: 'power3.out'
      });
      gsap.to('.menu-content', {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: 0.1
      });
    } else {
      gsap.to('.menu-content', {
        duration: 0.3,
        y: -50,
        opacity: 0,
        ease: 'power3.in'
      });
      gsap.to('.menu-overlay', {
        duration: 0.4,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power3.in',
        delay: 0.1
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Start', href: '#home' },
    { name: 'Projekty', href: '/projekty' },
    { name: 'Kompetencje', href: '#kompetencje' },
    { name: 'O Nas', href: '#about' },
    { name: 'Opinie', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' }
  ];

  const handleMenuClick = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Hamburger Menu Button */}
          <motion.button
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5 hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-6 h-0.5 bg-primary rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-6 h-0.5 bg-primary rounded-full"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-6 h-0.5 bg-primary rounded-full"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <motion.div 
              className="text-2xl font-bold text-primary cursor-pointer"
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary">Studio</span>
            </motion.div>
          </div>

          {/* Right Side - Social & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
            <motion.button
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              onClick={() => handleMenuClick('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BEZPŁATNA WYCENA
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div className="menu-overlay fixed inset-0 z-50 bg-white invisible opacity-0">
        <div className="menu-content flex flex-col items-center justify-center h-full opacity-0 translate-y-[-50px]">
          {/* Close Button */}
          <motion.button
            className="absolute top-8 right-8 p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={32} />
          </motion.button>

          {/* Menu Items */}
          <nav className="text-center space-y-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="block text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => handleMenuClick(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  y: isMenuOpen ? 0 : 30 
                }}
                transition={{ 
                  delay: isMenuOpen ? index * 0.1 + 0.2 : 0,
                  duration: 0.4 
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Social Links in Menu */}
          <div className="absolute bottom-12 flex items-center space-x-6">
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;