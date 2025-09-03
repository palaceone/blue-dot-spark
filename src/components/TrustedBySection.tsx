import React from 'react';
import { motion } from 'framer-motion';
import { LogoLoop } from './LogoLoop';

const TrustedBySection = () => {
  const trustedLogos = [
    { content: <div className="text-white font-bold text-lg">DIHO</div> },
    { content: <div className="text-white font-bold text-lg">Studio</div> },
    { content: <div className="text-white font-bold text-lg">Ecommerce</div> },
    { content: <div className="text-white font-bold text-lg">Virality</div> },
    { content: <div className="text-white font-bold text-lg">Nowy Dwór</div> },
    { content: <div className="text-white font-bold text-lg">Mazowieckie</div> }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Zaufali Nam
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dołącz do grona zadowolonych klientów, którzy wybierają nasze usługi graficzne i video
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LogoLoop
            logos={trustedLogos}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover={true}
            fadeOut={true}
            className="py-8"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;