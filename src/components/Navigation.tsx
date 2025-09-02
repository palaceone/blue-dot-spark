import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for menu overlay
    if (isMenuOpen) {
      gsap.to('.menu-overlay', {
        duration: 0.5,
        opacity: 1,
        ease: 'power3.out'
      });
    } else {
      gsap.to('.menu-overlay', {
        duration: 0.4,
        opacity: 0,
        ease: 'power3.in'
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
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-8 right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-smooth hover:scale-110 hover:bg-white/10"
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
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Full Page Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-gray-900/50" />
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            {/* Menu Content on the Left */}
            <div className="flex h-full relative z-10">
              {/* Left Side - Menu Items */}
              <div className="w-1/2 lg:w-1/3 flex flex-col justify-center pl-12 lg:pl-20">
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      className="block text-left text-3xl lg:text-4xl font-bold text-white hover:text-blue-400 transition-colors py-2 group"
                      onClick={() => handleMenuClick(item.href)}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: isMenuOpen ? 1 : 0, 
                        x: isMenuOpen ? 0 : -50 
                      }}
                      transition={{ 
                        delay: isMenuOpen ? index * 0.1 + 0.2 : 0,
                        duration: 0.4 
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="relative">
                        {item.name}
                        <div className="absolute inset-0 bg-white/5 rounded-lg blur-lg group-hover:bg-blue-400/20 transition-all duration-500 -z-10" />
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Right Side - Subtle pattern */}
              <div className="w-1/2 lg:w-2/3 bg-gradient-to-l from-gray-900/30 to-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;