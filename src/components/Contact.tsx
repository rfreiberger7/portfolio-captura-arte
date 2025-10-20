import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground animate-fade-in">
            Entre em Contato
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            Vamos criar memórias especiais juntos
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft animate-scale-in hover:shadow-glow transition-all">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">contato@dosanjos.fot.br</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft animate-scale-in hover:shadow-glow transition-all">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2 text-foreground">Telefone</h3>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-all animate-fade-in"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Enviar WhatsApp
          </Button>

          <div className="mt-12 pt-12 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-fade-in">
              <MapPin className="h-5 w-5 text-primary" />
              <p>São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
