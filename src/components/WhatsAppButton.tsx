import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import photographerPortrait from "@/assets/photographer-portrait.jpg";

const WhatsAppButton = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const whatsappNumber = "5541999791430";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre um ensaio fotográfico.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    // Mostra o balão de boas-vindas após 2 segundos
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    // Esconde o balão após 8 segundos
    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Balão de boas-vindas */}
      {showWelcome && (
        <div className="fixed bottom-28 right-24 z-[100] animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-glow p-4 max-w-[280px]">
            <button
              onClick={() => setShowWelcome(false)}
              className="absolute -top-2 -right-2 bg-muted-foreground/20 hover:bg-muted-foreground/30 rounded-full p-1 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="h-3 w-3 text-foreground" />
            </button>
            
            <div className="flex items-start gap-3">
              <img
                src={photographerPortrait}
                alt="Manu - Studio Manu Fotografias"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                loading="eager"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">Manu</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  É a Manu aqui, se precisar de mim é só me chamar!
                </p>
              </div>
            </div>
            
            {/* Seta do balão */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-sm"></div>
          </div>
        </div>
      )}

      {/* Botão do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-glow transition-all duration-300 animate-[pulse_2s_infinite] hover:scale-110"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
};

export default WhatsAppButton;
