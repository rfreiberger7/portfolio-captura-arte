import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VideoHero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-background">
      {/* Placeholder para vídeo - Manu enviará o vídeo posteriormente */}
      <div className="relative w-full h-full bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-muted-foreground text-lg mb-4">Vídeo de apresentação será adicionado em breve</p>
          <div className="w-full max-w-2xl aspect-video bg-muted/20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Espaço reservado para o vídeo</p>
          </div>
        </div>
        
        {/* Botão de som (será ativado quando houver vídeo) */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 p-3 bg-card/90 backdrop-blur-sm border border-border rounded-full hover:bg-primary/10 hover:border-primary transition-all shadow-soft opacity-50 cursor-not-allowed"
          disabled
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary" />
          )}
        </button>
      </div>

      {/* Frase de impacto */}
      <div className="absolute inset-0 flex items-end justify-center pb-12 bg-gradient-to-t from-background/80 via-transparent to-transparent">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-4xl font-light text-foreground mb-2 animate-fade-in">
            Transformando momentos em arte
          </h2>
          <p className="text-muted-foreground text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Capturando a essência e emoção de cada instante
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
