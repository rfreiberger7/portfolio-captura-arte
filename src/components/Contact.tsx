import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Entre em Contato</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">contato@studiomanu.com.br</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Telefone</h3>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Instagram</h3>
              <p className="text-muted-foreground">@studiomanufotografias</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-glow">
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <a href="https://wa.me/5511999999999" className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-glow">
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
};

export default Contact;
