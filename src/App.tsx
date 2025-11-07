import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import FemininoGallery from "./pages/gallery/Feminino";
import GestanteGallery from "./pages/gallery/Gestante";
import MesversarioGallery from "./pages/gallery/Mesversario";
import NewbornGallery from "./pages/gallery/Newborn";
import FormaturaGallery from "./pages/gallery/Formatura";
import ProfissionalGallery from "./pages/gallery/Profissional";
import PreWeddingGallery from "./pages/gallery/PreWedding";
import SmashGallery from "./pages/gallery/Smash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/loja" element={<Shop />} />
          <Route path="/produto/:handle" element={<ProductDetail />} />
          <Route path="/galeria/feminino" element={<FemininoGallery />} />
          <Route path="/galeria/gestante" element={<GestanteGallery />} />
          <Route path="/galeria/mesversario" element={<MesversarioGallery />} />
          <Route path="/galeria/newborn" element={<NewbornGallery />} />
          <Route path="/galeria/formatura" element={<FormaturaGallery />} />
          <Route path="/galeria/profissional" element={<ProfissionalGallery />} />
          <Route path="/galeria/pre-wedding" element={<PreWeddingGallery />} />
          <Route path="/galeria/smash" element={<SmashGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
