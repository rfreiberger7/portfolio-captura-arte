import { useState, useEffect } from "react";
import { X, ArrowLeft, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface GalleryPageProps {
  title: string;
  images: string[];
  instagramUrl?: string;
}

const GalleryPage = ({ title, images, instagramUrl }: GalleryPageProps) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          {/* Botão Voltar */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg shadow-lg hover:bg-primary/90 border-2 border-primary"
            >
              <ArrowLeft className="h-6 w-6" />
              ← Voltar ao Portfólio
            </button>
          </div>

          <div className="flex flex-col items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in text-center">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </div>
          
          {instagramUrl && (
            <div className="flex justify-center">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border-2 border-border text-foreground rounded-lg hover:border-primary"
              >
                <Instagram className="h-5 w-5" />
                Ver no Instagram
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid - Estilo Instagram */}
      <section className="py-12">
        <div className="w-full px-2">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square w-full overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image}
                  alt={`${title} - Foto ${index + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
                
                {/* Marca d'água */}
                <div className="absolute bottom-1 right-1 text-white/80 text-[10px] font-light bg-background/20 backdrop-blur-sm px-1.5 py-0.5 rounded">
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
              src={lightboxImage}
              alt={title}
              loading="lazy"
              className="w-full h-auto object-contain rounded-lg shadow-glow"
            />
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
