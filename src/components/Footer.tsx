import { Heart, Instagram, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={logoImg} alt="Studio Manu Fotografias" className="h-16 w-auto mx-auto mb-6" />
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all">
            <Instagram className="h-5 w-5 text-foreground" />
          </a>
          <a href="#" className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all">
            <Mail className="h-5 w-5 text-foreground" />
          </a>
          <a href="#" className="p-3 bg-background border border-border rounded-full hover:border-primary transition-all">
            <Phone className="h-5 w-5 text-foreground" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Studio Manu Fotografias
          <span>—</span>
          <span className="flex items-center gap-1">Feito com <Heart className="h-4 w-4 text-primary fill-primary" /></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
