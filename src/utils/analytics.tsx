/**
 * Analytics & Tracking Module
 * 
 * Este módulo fornece uma estrutura modular para integração com ferramentas
 * de tracking como Facebook Pixel e Google Ads Tag.
 * 
 * IMPORTANTE: As tags estão desativadas por padrão. Para ativá-las:
 * 1. Adicione seus IDs nas variáveis abaixo
 * 2. Descomente o código nas funções initFacebookPixel() e initGoogleAds()
 */

// ========================================
// CONFIGURAÇÃO
// ========================================

// Facebook Pixel ID - Substitua com seu ID quando estiver pronto
const FACEBOOK_PIXEL_ID = "";  // Ex: "1234567890"

// Google Ads Conversion ID - Substitua com seu ID quando estiver pronto
const GOOGLE_ADS_ID = "";  // Ex: "AW-123456789"

// ========================================
// FACEBOOK PIXEL
// ========================================

/**
 * Inicializa o Facebook Pixel
 * Descomente o código abaixo quando estiver pronto para usar
 */
export const initFacebookPixel = () => {
  if (!FACEBOOK_PIXEL_ID) {
    console.log("Facebook Pixel: ID não configurado");
    return;
  }

  /*
  // Código do Facebook Pixel
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  // @ts-ignore
  window.fbq('init', FACEBOOK_PIXEL_ID);
  // @ts-ignore
  window.fbq('track', 'PageView');
  */
};

/**
 * Rastreia um evento customizado no Facebook Pixel
 * @param eventName - Nome do evento (ex: 'Lead', 'Contact', 'ViewContent')
 * @param params - Parâmetros adicionais do evento
 */
export const trackFacebookEvent = (eventName: string, params?: object) => {
  if (!FACEBOOK_PIXEL_ID) return;

  /*
  // @ts-ignore
  if (window.fbq) {
    // @ts-ignore
    window.fbq('track', eventName, params);
  }
  */
};

// ========================================
// GOOGLE ADS
// ========================================

/**
 * Inicializa o Google Ads (gtag.js)
 * Descomente o código abaixo quando estiver pronto para usar
 */
export const initGoogleAds = () => {
  if (!GOOGLE_ADS_ID) {
    console.log("Google Ads: ID não configurado");
    return;
  }

  /*
  // Adiciona o script do gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);

  // Inicializa o gtag
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  function gtag() {
    // @ts-ignore
    window.dataLayer.push(arguments);
  }
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', GOOGLE_ADS_ID);
  */
};

/**
 * Rastreia uma conversão no Google Ads
 * @param conversionLabel - Label da conversão configurada no Google Ads
 * @param value - Valor da conversão (opcional)
 */
export const trackGoogleConversion = (conversionLabel: string, value?: number) => {
  if (!GOOGLE_ADS_ID) return;

  /*
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`,
      'value': value || 0,
      'currency': 'BRL'
    });
  }
  */
};

// ========================================
// EVENTOS PRÉ-CONFIGURADOS
// ========================================

/**
 * Rastreia quando um usuário visualiza a galeria
 */
export const trackGalleryView = (galleryName: string) => {
  trackFacebookEvent('ViewContent', { content_name: galleryName });
  // Google Ads pode ser rastreado aqui se necessário
};

/**
 * Rastreia quando um usuário clica no botão do WhatsApp
 */
export const trackWhatsAppClick = () => {
  trackFacebookEvent('Contact');
  trackGoogleConversion('WhatsApp_Contact');
};

/**
 * Rastreia quando um usuário preenche um formulário de contato
 */
export const trackContactForm = () => {
  trackFacebookEvent('Lead');
  trackGoogleConversion('Contact_Form');
};

/**
 * Rastreia visualização de uma categoria específica
 */
export const trackCategoryView = (categoryName: string) => {
  trackFacebookEvent('ViewContent', { 
    content_type: 'category',
    content_name: categoryName 
  });
};
