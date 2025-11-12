import { useEffect } from "react";
import { initFacebookPixel, initGoogleAds } from "@/utils/analytics";

/**
 * Componente que inicializa todas as ferramentas de analytics
 * Adicione este componente uma vez no topo da sua aplicação (ex: App.tsx)
 */
const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Inicializa o Facebook Pixel
    initFacebookPixel();
    
    // Inicializa o Google Ads
    initGoogleAds();
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
