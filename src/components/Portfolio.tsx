import { useState } from "react";
import { X } from "lucide-react";
import { portfolioImages } from "@/config/images";

const portfolioItems = [
  { id: 1, image: portfolioImages.milkBathGestante, title: "Ensaio Milk Bath Gestante", category: "milkBathGestante" },
  { id: 2, image: portfolioImages.feminino, title: "Feminino", category: "feminino" },
  { id: 3, image: portfolioImages.formatura, title: "Formatura", category: "formatura" },
  { id: 4, image: portfolioImages.gestante, title: "Gestante", category: "gestante" },
  { id: 5, image: portfolioImages.mesversario, title: "Mesversário", category: "mesversario" },
  { id: 6, image: portfolioImages.newborn, title: "Newborn", category: "newborn" },
  { id: 7, image: portfolioImages.preWedding, title: "Ensaio Pré Wedding", category: "preWedding" },
  { id: 8, image: portfolioImages.profissional, title: "Profissional", category: "profissional" },
  { id: 9, image: portfolioImages.smash, title: "Smash", category: "smash" },
  { id: 10, image: portfolioImages.coberturaCasamento, title: "Cobertura Casamento", category: "coberturaCasamento" },
  { id: 11, image: portfolioImages.coberturaAniversario, title: "Cobertura de Aniversário", category: "coberturaAniversario" },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "milkBathGestante", label: "Milk Bath Gestante" },
  { id: "feminino", label: "Feminino" },
  { id: "formatura", label: "Formatura" },
  { id: "gestante", label: "Gestante" },
  { id: "mesversario", label: "Mesversário" },
  { id: "newborn", label: "Newborn" },
  { id: "preWedding", label: "Pré Wedding" },
  { id: "profissional", label: "Profissional" },
  { id: "smash", label: "Smash" },
  { id: "coberturaCasamento", label: "Cobertura Casamento" },
  { id: "coberturaAniversario", label: "Cobertura Aniversário" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Portfólio
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-light transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => setLightboxImage(item)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto rounded-lg shadow-glow"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{lightboxImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
