import React from 'react';
import { BubbleMenu } from './BubbleMenu';

const Navigation = () => {
  const menuItems = [
    { label: 'Start', href: '#home' },
    { label: 'Projekty', href: '/projekty' },
    { label: 'Kompetencje', href: '#kompetencje' },
    { label: 'O Nas', href: '#about' },
    { label: 'Opinie', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <BubbleMenu
      logo="W"
      items={menuItems}
      useFixedPosition={true}
      menuBg="hsl(var(--card))"
      menuContentColor="hsl(var(--foreground))"
      className="z-50"
    />
  );
};

export default Navigation;