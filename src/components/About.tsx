import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-foreground animate-fade-in">
            Transformando momentos em memórias
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-12"></div>
          
          <p className="text-lg text-center text-muted-foreground mb-16 animate-fade-in">
            Descubra o único estúdio fotográfico que vai além da fotografia!
          </p>

          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-soft animate-scale-in">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "Aqui cada detalhe é pensado para que você e sua Família tenham uma experiência além da fotografia. Um ambiente acolhedor, profissionais apaixonados por pessoas, famílias e principalmente por bebês."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-secondary"></div>
                <p className="text-muted-foreground font-medium">
                  Pri Oliveira
                  <span className="block text-sm text-muted-foreground/70">
                    Proprietária e Fotógrafa
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
