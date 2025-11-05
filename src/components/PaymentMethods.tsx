import { CreditCard, Smartphone } from "lucide-react";

const PaymentMethods = () => {
  return (
    <section id="payment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Formas de Pagamento
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center p-8 bg-card rounded-lg border border-border shadow-soft hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Pix</h3>
              <p className="text-muted-foreground text-center">Pagamento instantâneo e seguro</p>
            </div>

            <div className="flex flex-col items-center p-8 bg-card rounded-lg border border-border shadow-soft hover:shadow-glow transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Cartão de Crédito</h3>
              <p className="text-muted-foreground text-center">Parcelamento disponível</p>
            </div>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Pagamento via Pix ou Cartão de Crédito em até <span className="text-primary">12x sem juros</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
