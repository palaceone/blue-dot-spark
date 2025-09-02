import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Lightbulb, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate statistics
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(stat,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { number: '150+', label: 'Ukończonych Projektów', icon: <Award className="text-primary" size={32} /> },
    { number: '98%', label: 'Zadowolenie Klientów', icon: <Users className="text-accent" size={32} /> },
    { number: '5+', label: 'Lat Doświadczenia', icon: <Lightbulb className="text-primary" size={32} /> },
    { number: '24h', label: 'Średni Czas Odpowiedzi', icon: <Rocket className="text-accent" size={32} /> }
  ];

  const addToStatsRefs = (el: HTMLDivElement | null) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Doskonałość</span>
              <br />
              <span className="text-foreground">Projektowa</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              W WAVES Studio wierzymy, że doskonały design to coś więcej niż estetyka—
              to tworzenie znaczących połączeń między markami a ich odbiorcami.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Strategiczne Myślenie</h3>
                  <p className="text-muted-foreground">
                    Każda decyzja projektowa opiera się na badaniach, strategii i głębokim zrozumieniu Twojego rynku.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ukierunkowane na Rezultaty</h3>
                  <p className="text-muted-foreground">
                    Mierzymy sukces Twoim sukcesem. Nasze projekty są tworzone, aby zwiększać zaangażowanie, konwersje i wzrost.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                ref={addToStatsRefs}
                className="text-center p-6 rounded-2xl bg-card border border-border transition-smooth hover:border-primary/30 hover:shadow-primary"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-gradient">Nasz Proces</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analiza', desc: 'Zrozumienie Twojej wizji i celów' },
              { step: '02', title: 'Strategia', desc: 'Opracowanie idealnego podejścia' },
              { step: '03', title: 'Projekt', desc: 'Tworzenie oszałamiających rozwiązań wizualnych' },
              { step: '04', title: 'Realizacja', desc: 'Ożywienie Twojego projektu' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-muted-foreground">{process.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;