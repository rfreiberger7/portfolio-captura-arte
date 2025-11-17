import { Heart, Instagram, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo-studio-manu.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <img 
          src={logoImg} 
          alt="Studio Manu Fotografias - Fotografia Profissional" 
          className="h-24 w-24 rounded-full object-cover mx-auto mb-6" 
        />
        <div className="flex justify-center gap-4 mb-6">
          <a 
            href="https://www.instagram.com/studio.manufotografias/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-foreground" />
          </a>
          <a 
            href="mailto:studiomanufotografias@gmail.com"
            className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-foreground" />
          </a>
          <a 
            href="https://wa.me/5541997914430"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all"
            aria-label="WhatsApp"
          >
            <Phone className="h-5 w-5 text-foreground" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Studio Manu Fotografias. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-xs mt-2 flex items-center justify-center gap-1">
          Feito com <Heart className="h-3 w-3 text-primary fill-primary inline" /> por Studio Manu Fotografias
        </p>
      </div>
    </footer>
  );
};

export default Footer;
