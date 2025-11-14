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
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 mb-16 group px-4 py-2 rounded-lg hover:bg-muted/30"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar ao Portfólio</span>
          </button>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 animate-fade-in">
                {title}
              </h1>
              <div className="w-24 h-1 bg-primary"></div>
            </div>
            
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-soft hover:shadow-glow"
              >
                <Instagram className="h-5 w-5" />
                Ver no Instagram
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setLightboxImage(image)}
              >
              <div className="aspect-[3/4] overflow-hidden bg-background">
                  <img
                    src={image}
                    alt={`${title} - Foto ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 block"
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
