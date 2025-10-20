import gestanteImg from "@/assets/gestante.jpg";
import infantilImg from "@/assets/infantil.jpg";
import eventosImg from "@/assets/eventos.jpg";
import geekImg from "@/assets/geek.jpg";
import acompanhamentoImg from "@/assets/acompanhamento.jpg";
import heroNewborn from "@/assets/hero-newborn.jpg";

const services = [
  {
    title: "Newborn",
    image: heroNewborn,
    description: "Primeiros dias de vida capturados com delicadeza",
  },
  {
    title: "Gestante",
    image: gestanteImg,
    description: "A beleza da espera eternizada em imagens",
  },
  {
    title: "Infantil (Smash The Cake)",
    image: infantilImg,
    description: "Celebrando o primeiro aniversário com diversão",
  },
  {
    title: "Eventos",
    image: eventosImg,
    description: "Momentos especiais em família registrados",
  },
  {
    title: "Geek",
    image: geekImg,
    description: "Ensaios temáticos criativos e divertidos",
  },
  {
    title: "Acompanhamento Infantil",
    image: acompanhamentoImg,
    description: "Crescimento documentado mês a mês",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-foreground animate-fade-in">
          Nossos Ensaios
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-light mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-light text-white drop-shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
