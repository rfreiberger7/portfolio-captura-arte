import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 animate-fade-in">
              Galeria Completa
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore todas as categorias de ensaios fotográficos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setLightboxImage(item)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} - Foto ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Marca d'água - Studio Manu Fotografias */}
                <div className="absolute bottom-4 right-4 text-white/80 text-xs font-light bg-background/20 backdrop-blur-sm px-2 py-1 rounded">
                  Studio Manu Fotografias
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
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-glow"
            />
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
