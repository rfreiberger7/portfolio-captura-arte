import { useState } from "react";
import { X, ExternalLink, Instagram } from "lucide-react";
import { portfolioImages } from "@/config/images";
import { useNavigate } from "react-router-dom";

// Criar array de items do portfólio com todas as imagens de cada categoria - ordem: newborn primeiro
const portfolioItems = [
  // Newborn
  ...portfolioImages.newborn.map((img, idx) => ({
    id: `newborn-${idx}`,
    image: img,
    title: "Newborn",
    category: "newborn",
    galleryUrl: "/galeria/newborn",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Gestante
  ...portfolioImages.gestante.map((img, idx) => ({
    id: `gestante-${idx}`,
    image: img,
    title: "Gestante",
    category: "gestante",
    galleryUrl: "/galeria/gestante",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Mesversário
  ...portfolioImages.mesversario.map((img, idx) => ({
    id: `mesversario-${idx}`,
    image: img,
    title: "Mesversário",
    category: "mesversario",
    galleryUrl: "/galeria/mesversario",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Smash
  ...portfolioImages.smash.map((img, idx) => ({
    id: `smash-${idx}`,
    image: img,
    title: "Smash",
    category: "smash",
    galleryUrl: "/galeria/smash",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Casamento
  ...portfolioImages.casamento.map((img, idx) => ({
    id: `casamento-${idx}`,
    image: img,
    title: "Casamento",
    category: "casamento",
    galleryUrl: "/galeria/casamento",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Pré Wedding
  ...portfolioImages.preWedding.map((img, idx) => ({
    id: `preWedding-${idx}`,
    image: img,
    title: "Ensaio Pré Wedding",
    category: "preWedding",
    galleryUrl: "/galeria/pre-wedding",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Profissional
  ...portfolioImages.profissional.map((img, idx) => ({
    id: `profissional-${idx}`,
    image: img,
    title: "Profissional",
    category: "profissional",
    galleryUrl: "/galeria/profissional",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Formatura
  ...portfolioImages.formatura.map((img, idx) => ({
    id: `formatura-${idx}`,
    image: img,
    title: "Formatura",
    category: "formatura",
    galleryUrl: "/galeria/formatura",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
  // Feminino
  ...portfolioImages.feminino.map((img, idx) => ({
    id: `feminino-${idx}`,
    image: img,
    title: "Feminino",
    category: "feminino",
    galleryUrl: "/galeria/feminino",
    instagramUrl: "https://www.instagram.com/studio.manufotografias/"
  })),
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "newborn", label: "Newborn" },
  { id: "gestante", label: "Gestante" },
  { id: "mesversario", label: "Mesversário" },
  { id: "smash", label: "Smash" },
  { id: "casamento", label: "Casamento" },
  { id: "preWedding", label: "Pré Wedding" },
  { id: "profissional", label: "Profissional" },
  { id: "formatura", label: "Formatura" },
  { id: "feminino", label: "Feminino" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);
  const navigate = useNavigate();

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

        {/* Category Filter - Melhorado */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-glow scale-105'
                  : 'bg-card text-foreground hover:bg-primary/10 border-2 border-border hover:border-primary/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden cursor-pointer bg-background" onClick={() => setLightboxImage(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 block"
                />
              </div>
              
              {/* Overlay com ícones */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  
                  {/* Botões de ação */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.galleryUrl);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-soft text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Galeria
                    </button>
                    
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-card text-foreground border border-border rounded-full hover:bg-primary/10 hover:border-primary transition-all shadow-soft text-sm"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Marca d'água */}
              <div className="absolute bottom-4 right-4 text-white/80 text-xs font-light bg-background/20 backdrop-blur-sm px-2 py-1 rounded">
                Studio Manu
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
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-glow"
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
