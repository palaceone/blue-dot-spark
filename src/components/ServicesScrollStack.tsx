import React from 'react';
import { motion } from 'framer-motion';
import { ScrollStack, ScrollStackItem } from './ScrollStack';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Video, Zap, Target, Megaphone, Camera } from 'lucide-react';

const ServicesScrollStack = () => {
  const services = [
    {
      icon: <Palette className="text-primary" size={32} />,
      title: "Identyfikacja Wizualna",
      description: "Tworzymy unikalne logo i systemy identyfikacji wizualnej, które wyróżnią Twoją markę na rynku.",
      features: ["Logo Design", "Brand Guidelines", "Kolorystyka", "Typografia"]
    },
    {
      icon: <Video className="text-accent" size={32} />,
      title: "Produkcja Video",
      description: "Profesjonalne filmy promocyjne, reklamowe i corporate, które skutecznie przekażą Twoje przesłanie.",
      features: ["Filmy Reklamowe", "Video Corporate", "Motion Graphics", "Montaż"]
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Grafika Reklamowa",
      description: "Projektujemy materiały reklamowe, które przyciągają uwagę i skutecznie promują Twoje produkty.",
      features: ["Plakaty", "Banery", "Ulotki", "Roll-upy"]
    },
    {
      icon: <Target className="text-accent" size={32} />,
      title: "Grafika Cyfrowa",
      description: "Nowoczesne projekty graficzne dostosowane do mediów cyfrowych i platform społecznościowych.",
      features: ["Social Media", "Web Graphics", "Animacje", "Infografiki"]
    },
    {
      icon: <Megaphone className="text-primary" size={32} />,
      title: "Kampanie Marketingowe",
      description: "Kompleksowe kampanie wizualne, które zwiększą rozpoznawalność Twojej marki.",
      features: ["Strategia Wizualna", "Kampanie 360°", "Branding", "Marketing"]
    },
    {
      icon: <Camera className="text-accent" size={32} />,
      title: "Fotografia",
      description: "Profesjonalne sesje fotograficzne produktowe i korporacyjne dla Twojego biznesu.",
      features: ["Zdjęcia Produktowe", "Sesje Corporate", "Retusz", "Styling"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nasze Usługi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferujemy pełen zakres usług graficznych i video w Nowym Dworze Mazowieckim
          </p>
        </motion.div>

        <ScrollStack className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollStackItem key={service.title} index={index}>
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 mb-8">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.span
                            key={feature}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ServicesScrollStack;