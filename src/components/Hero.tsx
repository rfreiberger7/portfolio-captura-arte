import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroNewborn from "@/assets/hero-newborn.jpg";
import gestanteImg from "@/assets/gestante.jpg";
import infantilImg from "@/assets/infantil.jpg";
import eventosImg from "@/assets/eventos.jpg";
import geekImg from "@/assets/geek.jpg";
import acompanhamentoImg from "@/assets/acompanhamento.jpg";

const categories = [
  { title: "Newborn", image: heroNewborn },
  { title: "Gestante", image: gestanteImg },
  { title: "Infantil", image: infantilImg },
  { title: "Eventos", image: eventosImg },
  { title: "Geek", image: geekImg },
  { title: "Acompanhamento", image: acompanhamentoImg },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Carousel */}
      <div className="relative h-full w-full">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(177, 198, 197, 0.3), rgba(177, 198, 197, 0.3)), url(${category.image})`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-fade-in">
                <h2 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wide">
                  {category.title}
                </h2>
                <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
                <p className="text-white/90 text-lg max-w-md mx-auto px-4">
                  Momentos especiais capturados com carinho
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute top-24 right-4 md:right-8 text-right animate-fade-in">
        <p className="text-white text-sm md:text-base italic">
          Especializados no início da melhor fase da vida 💗
        </p>
      </div>
    </section>
  );
};

export default Hero;
