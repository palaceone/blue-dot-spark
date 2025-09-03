import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
}

interface BubbleMenuProps {
  logo?: React.ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

const DEFAULT_ITEMS: MenuItem[] = [
  { label: 'Start', href: '#home', rotation: 0 },
  { label: 'Projekty', href: '/projekty', rotation: 45 },
  { label: 'Kompetencje', href: '#kompetencje', rotation: 90 },
  { label: 'O Nas', href: '#about', rotation: 135 },
  { label: 'Opinie', href: '#reviews', rotation: 180 },
  { label: 'FAQ', href: '#faq', rotation: 225 },
  { label: 'Kontakt', href: '#contact', rotation: 270 }
];

export const BubbleMenu = ({
  logo = "W",
  onMenuClick,
  className = '',
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items = DEFAULT_ITEMS,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}: BubbleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMenuClick?.(newState);
  };

  useEffect(() => {
    if (isOpen) {
      // Animate bubbles in
      bubblesRef.current.forEach((bubble, index) => {
        if (bubble) {
          const angle = (items[index]?.rotation || index * (360 / items.length)) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          gsap.fromTo(bubble,
            { scale: 0, x: 0, y: 0, opacity: 0 },
            {
              scale: 1,
              x,
              y,
              opacity: 1,
              duration: animationDuration,
              ease: animationEase,
              delay: index * staggerDelay + Math.random() * 0.1
            }
          );
        }
      });
    } else {
      // Animate bubbles out
      bubblesRef.current.forEach((bubble, index) => {
        if (bubble) {
          gsap.to(bubble, {
            scale: 0,
            x: 0,
            y: 0,
            opacity: 0,
            duration: animationDuration * 0.7,
            ease: 'power2.in',
            delay: index * staggerDelay * 0.5
          });
        }
      });
    }
  }, [isOpen, items, animationEase, animationDuration, staggerDelay]);

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    onMenuClick?.(false);
    
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      ref={menuRef}
      className={`${useFixedPosition ? 'fixed' : 'absolute'} top-8 right-8 z-50 ${className}`}
      style={style}
    >
      {/* Menu items */}
      <div className="relative">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            ref={(el) => {
              if (el) bubblesRef.current[index] = el;
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: item.hoverStyles?.bgColor,
              color: item.hoverStyles?.textColor
            }}
            transition={{ duration: 0.2 }}
            onClick={() => handleItemClick(item.href)}
            aria-label={item.ariaLabel || item.label}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-lg border"
              style={{
                backgroundColor: menuBg,
                color: menuContentColor,
                borderColor: 'hsl(var(--border))'
              }}
            >
              {item.label.charAt(0)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central toggle button */}
      <motion.button
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg border z-10"
        style={{
          backgroundColor: menuBg,
          color: menuContentColor,
          borderColor: 'hsl(var(--border))'
        }}
        onClick={toggleMenu}
        aria-label={menuAriaLabel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {typeof logo === 'string' ? (
                <span className="text-xl font-bold">{logo}</span>
              ) : (
                logo || <Menu size={20} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </nav>
  );
};