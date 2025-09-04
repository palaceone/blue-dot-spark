import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X, Instagram, Facebook, Camera } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for menu overlay - check if element exists first
    const menuOverlay = document.querySelector('.menu-overlay');
    if (menuOverlay) {
      if (isMenuOpen) {
        gsap.to(menuOverlay, {
          duration: 0.5,
          opacity: 1,
          ease: 'power3.out'
        });
      } else {
        gsap.to(menuOverlay, {
          duration: 0.4,
          opacity: 0,
          ease: 'power3.in'
        });
      }
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
            className="menu-overlay fixed inset-0 z-40 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Advanced Animated Grid Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Gradient Base */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
              
              {/* Animated Grid Lines */}
              <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={`vertical-${i}`}
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                    style={{ left: `${(i + 1) * 5}%` }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                  />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`horizontal-${i}`}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                    style={{ top: `${(i + 1) * 8.33}%` }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: i * 0.03 + 0.2, duration: 0.6 }}
                  />
                ))}
              </div>

              {/* Floating Particles */}
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div 
                  key={`particle-${i}`} 
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}

              {/* Glowing Orbs */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={`orb-${i}`}
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    scale: [1, 1.1, 0.9, 1]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>

            {/* Menu Content on the Left */}
            <div className="flex flex-col sm:flex-row h-full relative z-10">
              {/* Left Side - Menu Items */}
              <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center px-6 sm:pl-12 lg:pl-20">
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      className="block w-full text-center sm:text-left text-xl sm:text-3xl lg:text-4xl font-bold text-white transition-all duration-500 py-3 px-4 group"
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
                      whileHover={{ x: 0 }}
                    >
                      <span className="group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Right Side - Logo and Social Media */}
              <div className="w-full sm:w-1/2 lg:w-2/3 flex flex-col items-center justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    scale: isMenuOpen ? 1 : 0.8 
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/ee759693-0429-4705-a01a-923ee065591a.png" 
                    alt="Logo" 
                    className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    y: isMenuOpen ? 0 : 20 
                  }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex space-x-6"
                >
                  {[
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Camera, href: "#", label: "TikTok" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: isMenuOpen ? 1 : 0, 
                        scale: isMenuOpen ? 1 : 0 
                      }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;