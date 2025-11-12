import { Camera, Heart, Users, Briefcase, Baby, Sparkles } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Newborn & Bebês",
    description: "Newborn, mesversário e smash the cake. Registrando os primeiros momentos da vida com delicadeza."
  },
  {
    icon: Camera,
    title: "Ensaios Individuais",
    description: "Feminino, formatura e profissional. Imagens que refletem sua essência e personalidade."
  },
  {
    icon: Sparkles,
    title: "Pré Wedding",
    description: "Ensaios românticos que contam a história do casal antes do grande dia."
  },
  {
    icon: Heart,
    title: "Cobertura de Casamento",
    description: "Emoção e beleza em cada detalhe do seu dia mais especial, do início ao fim."
  },
  {
    icon: Users,
    title: "Cobertura de Aniversário",
    description: "Registro completo da festa, capturando alegria e momentos inesquecíveis da celebração."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Serviços
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 border border-border hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-block p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
