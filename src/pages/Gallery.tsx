import { useState } from "react";
import { X, ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { portfolioImages } from "@/config/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <section className="pt-20 pb-3 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mb-3 group text-xs"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
          
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-light text-foreground">
              Galeria
            </h1>
            
            {/* Dropdown Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px] h-8 text-xs bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id} className="text-xs">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Instagram Style */}
      <section className="py-2 bg-background">
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-3 gap-1">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer animate-fade-in bg-muted aspect-square"
                style={{ animationDelay: `${index * 0.01}s` }}
                onClick={() => setLightboxImage(item)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - Foto ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
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
