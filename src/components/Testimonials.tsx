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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Depoimentos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-12 shadow-glow border border-border animate-fade-in">
            <Quote className="h-12 w-12 text-primary mb-6 mx-auto" />
            
            <p className="text-xl text-foreground text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:border-primary transition-all shadow-soft"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
