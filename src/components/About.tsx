import { Camera, Heart, Sparkles } from "lucide-react";
import manuPhoto from "@/assets/manu-photo.png";

const About = () => {
  const values = [
    { icon: Sparkles, title: "Criatividade", description: "Cada ensaio é único e personalizado" },
    { icon: Heart, title: "Sensibilidade", description: "Capturo a essência de cada momento" },
    { icon: Camera, title: "Técnica", description: "Equipamento profissional e experiência" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-glow w-full md:max-w-[420px] mx-auto bg-background">
              <img 
                src={manuPhoto} 
                alt="Manu - Fotógrafa profissional especializada em ensaios femininos, newborn e eventos" 
                loading="lazy" 
                className="w-full h-full object-cover object-[30%_center] aspect-[4/5] block" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sobre Mim</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground mb-6">
              Sou Manu, fotógrafa apaixonada por capturar emoções autênticas e eternizar histórias através da luz.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Cada sessão é uma oportunidade única de criar arte que conecta pessoas e preserva memórias.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
