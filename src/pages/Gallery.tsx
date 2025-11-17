import { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VideoHero from "@/components/VideoHero";
import { Skeleton } from "@/components/ui/skeleton";
import { portfolioImages } from "@/config/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Criar array de items do portfólio com todas as imagens de cada categoria - ordem: newborn primeiro
const portfolioItems = [
  // Newborn
  ...portfolioImages.newborn.map((img, idx) => ({
    id: `newborn-${idx}`,
    image: img,
    title: "Newborn",
    category: "newborn"
  })),
  // Gestante
  ...portfolioImages.gestante.map((img, idx) => ({
    id: `gestante-${idx}`,
    image: img,
    title: "Gestante",
    category: "gestante"
  })),
  // Mesversário
  ...portfolioImages.mesversario.map((img, idx) => ({
    id: `mesversario-${idx}`,
    image: img,
    title: "Mesversário",
    category: "mesversario"
  })),
  // Smash
  ...portfolioImages.smash.map((img, idx) => ({
    id: `smash-${idx}`,
    image: img,
    title: "Smash",
    category: "smash"
  })),
  // Casamento
  ...portfolioImages.casamento.map((img, idx) => ({
    id: `casamento-${idx}`,
    image: img,
    title: "Casamento",
    category: "casamento"
  })),
  // Pré Wedding
  ...portfolioImages.preWedding.map((img, idx) => ({
    id: `preWedding-${idx}`,
    image: img,
    title: "Ensaio Pré Wedding",
    category: "preWedding"
  })),
  // Profissional
  ...portfolioImages.profissional.map((img, idx) => ({
    id: `profissional-${idx}`,
    image: img,
    title: "Profissional",
    category: "profissional"
  })),
  // Formatura
  ...portfolioImages.formatura.map((img, idx) => ({
    id: `formatura-${idx}`,
    image: img,
    title: "Formatura",
    category: "formatura"
  })),
  // Feminino
  ...portfolioImages.feminino.map((img, idx) => ({
    id: `feminino-${idx}`,
    image: img,
    title: "Feminino",
    category: "feminino"
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

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const handleBack = () => {
    if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Video Hero */}
      <VideoHero />
      
      {/* Header */}
      <section className="pt-8 pb-4 bg-background">
        <div className="container mx-auto px-4">
          {/* Botão Voltar no topo */}
          <div className="mb-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg shadow-lg hover:bg-secondary/90 border-2 border-secondary"
            >
              <ArrowLeft className="h-6 w-6" />
              ← Voltar à Página Inicial
            </button>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Galeria
            </h1>
            
            {/* Dropdown Filter - SEM EFEITOS */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] h-10 text-sm bg-card border-border transition-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id} className="text-sm">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Instagram Style: 4 POR FILA */}
      <section className="py-4 bg-background">
        <div className="w-full px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden cursor-pointer animate-fade-in bg-muted aspect-square"
                style={{ animationDelay: `${index * 0.01}s` }}
                onClick={() => setLightboxImage(item)}
              >
                {!loadedImages.has(item.id) && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                  src={item.image}
                  alt={`${item.title} - Foto ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover ${
                    loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(item.id)}
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
