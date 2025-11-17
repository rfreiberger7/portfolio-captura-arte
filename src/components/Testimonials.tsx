import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    text: "Experiência incrível! As fotos ficaram perfeitas e capturaram exatamente o que queríamos transmitir.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    text: "Profissionalismo impecável e resultado além das expectativas. Recomendo muito!",
    rating: 5
  },
  {
    id: 3,
    name: "Marina Santos",
    text: "A sensibilidade da Manu em capturar nossos momentos foi extraordinária. Fotos lindas e emocionantes!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground animate-fade-in">
          Depoimentos
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border animate-fade-in">
            <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
            
            <p className="text-base md:text-lg text-foreground text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="text-center">
              <p className="text-base font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-card border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-card border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
