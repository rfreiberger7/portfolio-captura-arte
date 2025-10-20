import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="text-xl font-light tracking-widest text-foreground">
              DOS ANJOS
            </div>
            <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Fotografia
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-secondary fill-secondary" />
            <span>© {new Date().getFullYear()}</span>
          </div>

          <p className="text-xs text-muted-foreground text-center max-w-md">
            Este site utiliza cookies de navegação para a melhor experiência do usuário.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
