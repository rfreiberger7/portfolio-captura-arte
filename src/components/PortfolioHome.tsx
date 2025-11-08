import { Instagram, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PortfolioHome = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Portfólio
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Conheça meu trabalho e inspire-se para seu próximo ensaio
        </p>

        {/* Duas caixas grandes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ver Galeria */}
          <div
            onClick={() => navigate('/galeria')}
            className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer bg-gradient-card animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
              <div className="p-6 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <Images className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Ver Galeria</h3>
              <p className="text-muted-foreground text-center">
                Explore todas as categorias de ensaios fotográficos
              </p>
            </div>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/studio.manufotografias/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer bg-gradient-card animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 flex flex-col items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
              <div className="p-6 bg-accent/20 rounded-full mb-6 group-hover:bg-accent/30 transition-colors">
                <Instagram className="h-16 w-16 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Instagram</h3>
              <p className="text-muted-foreground text-center">
                Acompanhe os bastidores e novidades do estúdio
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;
