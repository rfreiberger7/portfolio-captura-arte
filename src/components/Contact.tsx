import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Entre em Contato</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <a 
            href="mailto:studiomanufotografias@gmail.com"
            className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
            <p className="text-muted-foreground text-sm break-words hover:text-primary transition-colors">
              studiomanufotografias@gmail.com
            </p>
          </a>
          <a 
            href="tel:+5541999791430"
            className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Telefone</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">(41) 99979-1430</p>
          </a>
          <a 
            href="https://www.instagram.com/studio.manufotografias/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Instagram</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">@studio.manufotografias</p>
          </a>
        </div>

        <div className="text-center">
          <a href="https://wa.me/5541999791430" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right-bottom text-primary-foreground px-10 py-6 text-lg rounded-full shadow-glow hover:scale-105 font-bold transition-all duration-300">
              <MessageCircle className="mr-2 h-6 w-6" />
              Enviar WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
