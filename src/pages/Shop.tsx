import { ShopNavbar } from "@/components/shop/ShopNavbar";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <ShopNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Produtos Importados Premium
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Qualidade internacional, entrega nacional. Descubra nossa seleção exclusiva de produtos importados.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="gap-2">
              Ver Produtos <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Frete Grátis
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-card border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-lg mb-2">Frete Grátis</h3>
              <p className="text-muted-foreground text-sm">Em compras acima de R$ 200</p>
            </div>
            <div className="p-6 rounded-lg bg-card border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-lg mb-2">Compra Segura</h3>
              <p className="text-muted-foreground text-sm">Pagamento 100% protegido</p>
            </div>
            <div className="p-6 rounded-lg bg-card border animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold text-lg mb-2">Parcelamento</h3>
              <p className="text-muted-foreground text-sm">Até 10x sem juros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Minha Loja. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
