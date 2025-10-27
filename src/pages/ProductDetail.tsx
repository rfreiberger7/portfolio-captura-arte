import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopNavbar } from "@/components/shop/ShopNavbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Loader2 } from "lucide-react";
import { fetchProducts } from "@/lib/shopify";
import { ShopifyProduct } from "@/types/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const products = await fetchProducts(100);
      const found = products.find(p => p.node.handle === handle);
      if (found) {
        setProduct(found);
        setSelectedVariant(found.node.variants.edges[0]?.node);
      }
      setLoading(false);
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ShopNavbar />
        <div className="flex items-center justify-center min-h-[60vh] pt-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <ShopNavbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/loja">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para loja
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { node } = product;
  const price = parseFloat(selectedVariant?.price.amount || node.priceRange.minVariantPrice.amount);

  return (
    <div className="min-h-screen bg-background">
      <ShopNavbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Link to="/loja" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar para loja
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              {node.images.edges[0]?.node.url ? (
                <img
                  src={node.images.edges[0].node.url}
                  alt={node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Sem imagem
                </div>
              )}
            </div>
            
            {node.images.edges.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {node.images.edges.slice(1, 5).map((image, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-75 transition-opacity">
                    <img
                      src={image.node.url}
                      alt={`${node.title} ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{node.title}</h1>
            <p className="text-3xl font-bold text-primary mb-6">
              {selectedVariant?.price.currencyCode || node.priceRange.minVariantPrice.currencyCode} {price.toFixed(2)}
            </p>

            <div className="prose prose-sm max-w-none mb-6 text-muted-foreground">
              {node.description}
            </div>

            {/* Variants */}
            {node.options.map((option, idx) => (
              <div key={idx} className="mb-6">
                <label className="block text-sm font-medium mb-2">{option.name}</label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => {
                    const variant = node.variants.edges.find(v => 
                      v.node.selectedOptions.some(opt => opt.name === option.name && opt.value === value)
                    );
                    const isSelected = selectedVariant?.id === variant?.node.id;
                    
                    return (
                      <Button
                        key={value}
                        variant={isSelected ? "default" : "outline"}
                        onClick={() => variant && setSelectedVariant(variant.node)}
                        disabled={!variant?.node.availableForSale}
                      >
                        {value}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantidade</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="w-full gap-2"
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingCart className="h-5 w-5" />
              Adicionar ao Carrinho
            </Button>

            {!selectedVariant?.availableForSale && (
              <p className="text-destructive text-sm mt-2">Este produto está esgotado</p>
            )}

            {/* Benefits */}
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Frete grátis acima de R$ 200</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Parcelamento em até 10x sem juros</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">✓</span>
                <span>Compra 100% segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
