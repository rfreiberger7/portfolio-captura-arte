import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import newbornImg from "@/assets/hero-newborn.jpg";
import gestanteImg from "@/assets/gestante.jpg";
import infantilImg from "@/assets/infantil.jpg";
import eventosImg from "@/assets/eventos.jpg";
import geekImg from "@/assets/geek.jpg";
import acompanhamentoImg from "@/assets/acompanhamento.jpg";

const categories = [
  { id: 1, image: eventosImg, title: "Eventos", link: "#portfolio" },
  { id: 2, image: gestanteImg, title: "Gestante", link: "#portfolio" },
  { id: 3, image: newbornImg, title: "Newborn", link: "#portfolio" },
  { id: 4, image: infantilImg, title: "Infantil", link: "#portfolio" },
  { id: 5, image: geekImg, title: "Geek", link: "#portfolio" },
  { id: 6, image: acompanhamentoImg, title: "Acompanhamento Infantil", link: "#portfolio" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + categories.length) % categories.length;
      visible.push({ ...categories[index], offset: i });
    }
    return visible;
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {getVisibleSlides().map((category, idx) => (
            <div
              key={category.id}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${category.offset * 100}%) scale(${category.offset === 0 ? 1 : 0.8})`,
                zIndex: category.offset === 0 ? 10 : 5,
                opacity: category.offset === 0 ? 1 : 0.5,
              }}
            >
              <div className="relative w-[80vw] md:w-[500px] lg:w-[700px] aspect-[4/3] rounded-lg overflow-hidden shadow-glow">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent flex items-end justify-center pb-8">
                  <a
                    href={category.link}
                    className="text-2xl md:text-3xl font-light text-foreground hover:text-primary transition-colors"
                  >
                    {category.title}
                  </a>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 z-20 p-3 bg-card/90 border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 z-20 p-3 bg-card/90 border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
