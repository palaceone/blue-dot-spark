import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for menu button
    if (isMenuOpen) {
      gsap.to('.menu-bg', {
        duration: 0.6,
        scale: 1,
        ease: 'power3.out'
      });
    } else {
      gsap.to('.menu-bg', {
        duration: 0.4,
        scale: 0,
        ease: 'power3.in'
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-8 right-8 z-50 p-4 rounded-full glass-effect transition-smooth hover:scale-110"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={24} className="text-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="menu-bg w-96 h-96 rounded-[3rem] glass-effect flex items-center justify-center scale-0">
                <nav className="text-center">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      className="block w-full py-4 px-8 text-white text-xl font-medium hover:text-primary transition-smooth"
                      onClick={() => handleMenuClick(item.href)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isMenuOpen ? 1 : 0, 
                        y: isMenuOpen ? 0 : 20 
                      }}
                      transition={{ 
                        delay: isMenuOpen ? index * 0.1 + 0.3 : 0,
                        duration: 0.3 
                      }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;