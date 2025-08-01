import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowLeft, ExternalLink, Zap, Calendar, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Page load animations
    gsap.fromTo('.hero-content', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo('.project-image', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.6 }
    );

    gsap.fromTo('.detail-cards', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.8 }
    );
  }, []);

  const projectStats = [
    { icon: <Target className="text-primary" size={20} />, label: 'Brand Recognition', value: '+180%' },
    { icon: <Users className="text-accent" size={20} />, label: 'User Engagement', value: '+95%' },
    { icon: <Zap className="text-primary" size={20} />, label: 'Conversion Rate', value: '+127%' },
  ];

  const projectDetails = [
    { label: 'Client', value: 'Nexus Technologies' },
    { label: 'Duration', value: '3 months' },
    { label: 'Services', value: 'Brand Identity, Logo Design, Guidelines' },
    { label: 'Industry', value: 'Technology & Innovation' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 gradient-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="ghost"
              className="mb-8 text-white hover:text-primary transition-smooth"
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>

          <div className="hero-content text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="text-primary" size={32} />
              <Badge variant="outline" className="border-primary text-primary">
                Brand Design
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Nexus Brand Identity
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete brand transformation for a tech startup, including logo design, 
              color palette, typography, and comprehensive brand guidelines.
            </p>
          </div>

          {/* Project Image */}
          <div className="project-image relative">
            <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl flex items-center justify-center shadow-primary border border-primary/20">
              <div className="text-9xl font-bold text-white/20">N</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="detail-cards"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge & Solution */}
            <motion.div
              className="detail-cards"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nexus Technologies needed a complete brand overhaul to establish credibility 
                in the competitive tech market. Their existing identity was outdated and 
                failed to communicate their innovative approach and technical expertise.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We created a modern, minimalistic brand identity that reflects their 
                cutting-edge technology while maintaining approachability. The new logo 
                symbolizes connection and innovation, perfectly representing their mission.
              </p>
            </motion.div>

            {/* Project Info */}
            <motion.div
              className="detail-cards"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gradient">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4">
                    {projectDetails.map((detail, index) => (
                      <div key={detail.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <span className="font-medium text-foreground">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <Button
                      className="w-full glass-button bg-primary/20 backdrop-blur-lg border border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/50 transition-bounce"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Start Similar Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              The Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              From initial concept to final delivery, every step was carefully crafted 
              to ensure the brand perfectly represents Nexus Technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Research', 'Concept', 'Design', 'Launch'].map((step, index) => (
                <motion.div
                  key={step}
                  className="detail-cards"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-primary">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step}</h3>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;