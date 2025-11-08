import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { portfolioImages } from "@/config/images";

// Criar array de items do portfólio com todas as imagens de cada categoria
const portfolioItems = [
  // Gestante
  ...portfolioImages.gestante.map((img, idx) => ({
    id: `gestante-${idx}`,
    image: img,
    title: "Gestante",
    category: "gestante"
  })),
  // Feminino
  ...portfolioImages.feminino.map((img, idx) => ({
    id: `feminino-${idx}`,
    image: img,
    title: "Feminino",
    category: "feminino"
  })),
  // Mesversário
  ...portfolioImages.mesversario.map((img, idx) => ({
    id: `mesversario-${idx}`,
    image: img,
    title: "Mesversário",
    category: "mesversario"
  })),
  // Formatura
  ...portfolioImages.formatura.map((img, idx) => ({
    id: `formatura-${idx}`,
    image: img,
    title: "Formatura",
    category: "formatura"
  })),
  // Newborn
  ...portfolioImages.newborn.map((img, idx) => ({
    id: `newborn-${idx}`,
    image: img,
    title: "Newborn",
    category: "newborn"
  })),
  // Profissional
  ...portfolioImages.profissional.map((img, idx) => ({
    id: `profissional-${idx}`,
    image: img,
    title: "Profissional",
    category: "profissional"
  })),
  // Pré Wedding
  ...portfolioImages.preWedding.map((img, idx) => ({
    id: `preWedding-${idx}`,
    image: img,
    title: "Ensaio Pré Wedding",
    category: "preWedding"
  })),
  // Smash
  ...portfolioImages.smash.map((img, idx) => ({
    id: `smash-${idx}`,
    image: img,
    title: "Smash",
    category: "smash"
  })),
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "feminino", label: "Feminino" },
  { id: "gestante", label: "Gestante" },
  { id: "mesversario", label: "Mesversário" },
  { id: "newborn", label: "Newborn" },
  { id: "formatura", label: "Formatura" },
  { id: "profissional", label: "Profissional" },
  { id: "preWedding", label: "Pré Wedding" },
  { id: "smash", label: "Smash" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);
  const navigate = useNavigate();

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 animate-fade-in">
              Galeria Completa
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Explore todas as categorias de ensaios fotográficos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-background/95 backdrop-blur-sm sticky top-0 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.02}s` }}
                onClick={() => setLightboxImage(item)}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.title} - Foto ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10 p-2 bg-card/50 rounded-full"
            onClick={() => setLightboxImage(null)}
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Navegação anterior */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-10 p-3 bg-card/80 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
              const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
              setLightboxImage(filteredItems[prevIndex]);
            }}
            aria-label="Foto anterior"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Navegação próxima */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-10 p-3 bg-card/80 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
              const nextIndex = (currentIndex + 1) % filteredItems.length;
              setLightboxImage(filteredItems[nextIndex]);
            }}
            aria-label="Próxima foto"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-glow"
            />
            <div className="text-center mt-4 text-muted-foreground text-sm">
              Studio Manu Fotografias
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
