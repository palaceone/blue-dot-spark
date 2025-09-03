import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  image: string;
  text: string;
  link?: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  scrollSpeed?: number;
  scrollEase?: number;
  className?: string;
}

export const CircularGallery = ({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  scrollSpeed = 2,
  scrollEase = 0.05,
  className = ''
}: CircularGalleryProps) => {
  const [rotation, setRotation] = useState(0);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const itemCount = items.length;
  const angleStep = 360 / itemCount;
  const radius = 200;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * scrollSpeed * scrollEase;
      setRotation(prev => prev + delta);
    };

    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener('wheel', handleWheel, { passive: false });
      return () => gallery.removeEventListener('wheel', handleWheel);
    }
  }, [scrollSpeed, scrollEase]);

  const handleItemClick = (item: GalleryItem) => {
    if (item.link) {
      window.open(item.link, '_blank');
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div className={`relative w-full h-96 overflow-hidden ${className}`}>
      <div
        ref={galleryRef}
        className="relative w-full h-full flex items-center justify-center perspective-1000"
      >
        {items.map((item, index) => {
          const angle = (index * angleStep + rotation) * (Math.PI / 180);
          const x = Math.sin(angle) * radius;
          const y = Math.cos(angle) * radius * bend / 10;
          const z = Math.cos(angle) * 50;
          const scale = (Math.cos(angle) + 1) / 2 * 0.5 + 0.5;
          const opacity = (Math.cos(angle) + 1) / 2 * 0.7 + 0.3;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer group"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                opacity,
                zIndex: Math.round(z + 50)
              }}
              whileHover={{ scale: scale * 1.1 }}
              onClick={() => handleItemClick(item)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-32 h-24 object-cover shadow-lg"
                  style={{
                    borderRadius: `${borderRadius * 100}%`
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                     style={{ borderRadius: `${borderRadius * 100}%` }}>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                    >
                      <Eye size={16} />
                    </Button>
                    {item.link && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.link, '_blank');
                        }}
                      >
                        <ExternalLink size={16} />
                      </Button>
                    )}
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap"
                  style={{ color: textColor }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-background rounded-lg p-6 max-w-2xl w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.text}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-4">{selectedItem.text}</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedItem(null)}
              >
                Zamknij
              </Button>
              {selectedItem.link && (
                <Button
                  onClick={() => window.open(selectedItem.link, '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  Zobacz Projekt
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
        Przewiń, aby obracać galerię
      </div>
    </div>
  );
};