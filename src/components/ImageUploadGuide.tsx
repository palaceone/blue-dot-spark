import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, FolderOpen, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImageUploadGuide = () => {
  const methods = [
    {
      title: 'Folder Public',
      description: 'Najprostszy sposób - wrzuć obrazy do folderu public/images/',
      icon: <FolderOpen className="text-primary" size={24} />,
      steps: [
        'Stwórz folder public/images/ w projekcie',
        'Wrzuć swoje obrazy (jpg, png, webp)',
        'Użyj w kodzie: /images/nazwa-obrazu.jpg',
        'Obrazy będą dostępne publicznie'
      ],
      example: `<img src="/images/projekt1.jpg" alt="Mój projekt" />`
    },
    {
      title: 'Folder Assets + Import',
      description: 'Dla lepszej optymalizacji - importuj obrazy jako moduły',
      icon: <Image className="text-accent" size={24} />,
      steps: [
        'Stwórz folder src/assets/images/',
        'Dodaj swoje obrazy do folderu',
        'Importuj w komponencie: import img from "@/assets/images/projekt.jpg"',
        'Vite automatycznie optymalizuje obrazy'
      ],
      example: `import heroImage from "@/assets/images/hero.jpg";
<img src={heroImage} alt="Hero" />`
    },
    {
      title: 'Supabase Storage',
      description: 'Dla dynamicznych uploadów i zarządzania plikami',
      icon: <Upload className="text-primary" size={24} />,
      steps: [
        'Stworzę bucket w Supabase Storage',
        'Dodasz formularz uploadów',
        'Obrazy będą przechowywane w chmurze',
        'Możliwość zarządzania przez panel admin'
      ],
      example: `const uploadImage = async (file) => {
  const { data } = await supabase.storage
    .from('images').upload('path', file);
}`
    }
  ];

  return (
    <motion.div 
      className="my-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Jak dodać swoje obrazy?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Masz kilka opcji dodawania swoich prac graficznych do portfolio. 
          Wybierz metodę, która najbardziej Ci odpowiada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {methods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full bg-card border-border hover:border-primary/30 transition-smooth hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {method.icon}
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-4">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary text-xs rounded-full flex items-center justify-center mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Code size={16} className="text-accent" />
                    <span className="text-xs font-medium text-accent">Przykład:</span>
                  </div>
                  <code className="text-xs text-muted-foreground block overflow-x-auto">
                    {method.example}
                  </code>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-sm">!</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Zalecenia:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Optymalizuj obrazy przed dodaniem (WebP, kompresja)</li>
              <li>• Używaj opisowych nazw plików (projekt-logo-virality.jpg)</li>
              <li>• Dla portfolio polecam metodę Assets + Import</li>
              <li>• Rozdzielczość: minimum 1200px szerokości dla jakości</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageUploadGuide;