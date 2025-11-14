import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";
import testimonial7 from "@/assets/testimonial-7.png";
import testimonial8 from "@/assets/testimonial-8.png";
import testimonial9 from "@/assets/testimonial-9.png";

const testimonials = [
  {
    id: 1,
    name: "Kamylle Nicole Peixoto",
    text: "A Manu é uma excelente profissional, atenciosa e extremamente querida durante todo o ensaio newborn. Seu cuidado e o amor que coloca no que faz são visíveis em cada detalhe. Recomendo de coração e, sem dúvida, voltarei a realizar novos ensaios fotográficos com ela!",
    rating: 5,
    image: testimonial1
  },
  {
    id: 2,
    name: "Adriana Souza",
    text: "Simplesmente maravilhosa. Super atenciosa. Maquiagem ficou perfeita. Todo o cuidado necessário com uma gestante. Estou super feliz com os resultados e ansiosa para receber as fotos. Obrigada pela experiência incrível.",
    rating: 5,
    image: testimonial2
  },
  {
    id: 3,
    name: "Juliana Palmonari",
    text: "Excelente profissional, atenciosa, querida. Trata as fotos com muito carinho, realmente faz um trabalho para eternizar os momentos especiais!",
    rating: 5,
    image: testimonial3
  },
  {
    id: 4,
    name: "Larissa Negro",
    text: "Incrível, fotógrafa maravilhosa, amei meu e ensaio de Natal e com certeza farei outros, muito atenciosa! Recomendo",
    rating: 5,
    image: testimonial4
  },
  {
    id: 5,
    name: "Mapus Burro",
    text: "Super indico o trabalho da Manu, ótima profissional 👏",
    rating: 5,
    image: testimonial5
  },
  {
    id: 6,
    name: "Andressa Mathias",
    text: "Ótimo recepção, lugar aconchegante. Ensaio bem descontraído. Amei",
    rating: 5,
    image: testimonial6
  },
  {
    id: 7,
    name: "Luciana Madalena Paschalis Casalunga",
    text: "Amei as fotos e figurinos que fiz de gestante no estúdio. A Manu super atenciosa, criativa nos deixou super a vontade. Além da maquiagem profissional que ela fez, deu toda diferença para fotos. Valeu muito apena super indico. Além da localização do estúdio que facilita também.",
    rating: 5,
    image: testimonial7
  },
  {
    id: 8,
    name: "Nath Cristina",
    text: "Lugar maravilhosa e aconchegante, atendimento da Manu é perfeito, simpática e muito cuidadosa, me auxiliou em tudo muito bem, me senti maravilhosa, super indico 🥰🤗",
    rating: 5,
    image: testimonial8
  },
  {
    id: 9,
    name: "Fernanda Caroline Becker Arent Rosa",
    text: "Amei, ótimo atendimento e excelente profissional!",
    rating: 5,
    image: testimonial9
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
            
            {/* Testimonial Image */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
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
