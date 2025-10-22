import { Camera, Heart, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Ensaio Pessoal",
    description: "Registros únicos que refletem sua essência e personalidade com autenticidade."
  },
  {
    icon: Heart,
    title: "Casamentos",
    description: "Emoção e beleza em cada detalhe do seu dia mais especial."
  },
  {
    icon: Users,
    title: "Eventos",
    description: "Cobertura completa com olhar artístico para momentos inesquecíveis."
  },
  {
    icon: Briefcase,
    title: "Retratos Profissionais",
    description: "Imagens que comunicam confiança e profissionalismo."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Serviços
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-500 border border-border hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-8 w-8 text-primary" />
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
