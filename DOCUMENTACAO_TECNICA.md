# 📚 Documentação Técnica - Studio Manu Fotografias

## 📋 Índice
1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Componentes Principais](#componentes-principais)
5. [Fluxo de Dados](#fluxo-de-dados)
6. [Sistema de Imagens](#sistema-de-imagens)
7. [Sistema de Analytics](#sistema-de-analytics)
8. [Configuração e Personalização](#configuração-e-personalização)
9. [Deployment](#deployment)

---

## 🎯 Visão Geral do Projeto

**Studio Manu Fotografias** é um site profissional de portfólio fotográfico desenvolvido em React + Vite + TypeScript. O projeto apresenta ensaios fotográficos organizados por categorias com galeria interativa, integração com WhatsApp e preparação para tracking de conversões.

### Características Principais:
- ✅ 100% Responsivo (Mobile-first)
- ✅ Design system customizado com cores suaves e elegantes
- ✅ Carregamento otimizado de imagens (lazy loading)
- ✅ Galeria lightbox com navegação
- ✅ Integração WhatsApp com mensagem automatizada
- ✅ Preparado para Facebook Pixel e Google Ads
- ✅ SEO otimizado

---

## 📁 Estrutura de Arquivos

```
studio-manu-fotografias/
├── public/
│   ├── logo-studio-manu.png          # Logo do estúdio
│   └── robots.txt                     # Instruções para crawlers
├── src/
│   ├── assets/                        # Imagens do portfolio
│   │   ├── feminino/                  # Categoria feminino
│   │   ├── mesversario/               # Categoria mesversário
│   │   ├── formatura/                 # Categoria formatura
│   │   ├── newborn/                   # Categoria newborn
│   │   ├── profissional/              # Categoria profissional
│   │   ├── pre-wedding/               # Categoria pré-wedding
│   │   └── smash/                     # Categoria smash
│   ├── components/                    # Componentes React
│   │   ├── About.tsx                  # Seção "Sobre Mim"
│   │   ├── AnalyticsProvider.tsx      # Provider de analytics
│   │   ├── Contact.tsx                # Seção de contato
│   │   ├── Footer.tsx                 # Rodapé
│   │   ├── GalleryPage.tsx            # Template página galeria
│   │   ├── Hero.tsx                   # Hero com carrossel
│   │   ├── Navbar.tsx                 # Menu de navegação
│   │   ├── PaymentMethods.tsx         # Formas de pagamento
│   │   ├── Portfolio.tsx              # Grid de portfólio
│   │   ├── PortfolioHome.tsx          # Destaque portfólio
│   │   ├── Services.tsx               # Serviços oferecidos
│   │   ├── Testimonials.tsx           # Depoimentos
│   │   ├── VideoHero.tsx              # Hero com vídeo
│   │   └── WhatsAppButton.tsx         # Botão flutuante WhatsApp
│   ├── config/
│   │   └── images.ts                  # Configuração central de imagens
│   ├── pages/                         # Páginas do site
│   │   ├── Index.tsx                  # Homepage
│   │   ├── Gallery.tsx                # Galeria completa
│   │   ├── NotFound.tsx               # Página 404
│   │   └── gallery/                   # Galerias específicas
│   │       ├── Feminino.tsx
│   │       ├── Formatura.tsx
│   │       ├── Mesversario.tsx
│   │       ├── Newborn.tsx
│   │       ├── PreWedding.tsx
│   │       ├── Profissional.tsx
│   │       └── Smash.tsx
│   ├── utils/
│   │   └── analytics.tsx              # Módulo de tracking
│   ├── App.tsx                        # Componente raiz
│   ├── main.tsx                       # Entry point
│   └── index.css                      # Estilos globais + Design system
├── COMO_TROCAR_IMAGENS.md            # Guia de gerenciamento de imagens
└── DOCUMENTACAO_TECNICA.md           # Esta documentação

```

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.3** - Biblioteca JavaScript para UI
- **Vite** - Build tool ultra-rápido
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento SPA

### UI & Styling
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis headless
- **Lucide React** - Ícones SVG modernos
- **Sonner** - Toast notifications elegantes

### State & Data
- **TanStack Query** - Gerenciamento de estado assíncrono
- **Zustand** - State management leve (para carrinho de compras)

### Extras
- **Embla Carousel** - Carrosséis performáticos
- **date-fns** - Manipulação de datas
- **clsx + tailwind-merge** - Utilitários CSS

---

## 🧩 Componentes Principais

### 1. **Navbar** (`src/components/Navbar.tsx`)
**Função:** Menu de navegação principal com comportamento sticky inteligente.

**Características:**
- Sticky on scroll-up (aparece ao rolar para cima, esconde ao rolar para baixo)
- Responsivo com menu hambúrguer mobile
- Links âncora suaves para seções da página
- Logo clicável para homepage

**Props:** Nenhuma

**Uso:**
```tsx
import Navbar from "@/components/Navbar";

<Navbar />
```

---

### 2. **Hero** (`src/components/Hero.tsx`)
**Função:** Carrossel principal com imagens do portfólio.

**Características:**
- Carrossel automático com Embla Carousel
- Transições suaves entre imagens
- Indica categoria de cada imagem
- Lazy loading de imagens
- Marca d'água "Studio Manu" em cada imagem

**Dados:** Importa `heroImages` de `src/config/images.ts`

**Estrutura de dados:**
```typescript
heroImages = [
  {
    image: string,      // Caminho da imagem
    title: string,      // Nome da categoria
    category: string    // ID da categoria
  },
  // ...
]
```

---

### 3. **Portfolio** (`src/components/Portfolio.tsx`)
**Função:** Grid interativo de portfólio com filtros por categoria.

**Características:**
- Filtro por categoria (Todos, Feminino, Mesversário, etc.)
- Grid responsivo (1-3 colunas dependendo do viewport)
- Hover effects elegantes
- Botões "Ver Galeria" e "Instagram"
- Lightbox para visualização ampliada
- Marca d'água em cada imagem

**State:**
- `selectedCategory`: Categoria ativa no filtro
- `lightboxImage`: Imagem atual no lightbox (null quando fechado)

**Fluxo:**
1. Usuário clica em categoria → `setSelectedCategory()`
2. `filteredItems` recalcula baseado em `selectedCategory`
3. Grid re-renderiza apenas imagens da categoria
4. Click em imagem → Abre lightbox com `setLightboxImage()`

---

### 4. **Gallery** (`src/pages/Gallery.tsx`)
**Função:** Página de galeria completa estilo Instagram.

**Características:**
- VideoHero no topo
- Botão "Voltar" inteligente (histórico ou homepage)
- Dropdown de filtro compacto (mobile-friendly)
- Grid 3x3 sem espaçamento (estilo Instagram)
- Lightbox com navegação (anterior/próxima)
- Lazy loading + Skeleton placeholders

**State:**
- `selectedCategory`: Filtro ativo
- `lightboxImage`: Imagem no lightbox
- `loadedImages`: Set de IDs de imagens já carregadas

**Navegação no Lightbox:**
```tsx
const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
const nextIndex = (currentIndex + 1) % filteredItems.length;
setLightboxImage(filteredItems[nextIndex]);
```

---

### 5. **WhatsAppButton** (`src/components/WhatsAppButton.tsx`)
**Função:** Botão flutuante do WhatsApp com mensagem de boas-vindas animada.

**Características:**
- Fixo no canto inferior direito
- Mensagem automática após 15 segundos
- Efeito de digitação (typing animation)
- Minimizável
- Link direto com mensagem pré-preenchida

**Configuração:**
```tsx
const whatsappNumber = "5541999791430";
const whatsappMessage = "Olá! Quero saber mais sobre um ensaio fotográfico.";
```

**Lógica da mensagem:**
1. Após 15s → `setShowWelcome(true)` + `setIsTyping(true)`
2. useEffect adiciona caractere por caractere (50ms delay)
3. Após completar texto → Auto-hide em 5s

---

### 6. **Services** (`src/components/Services.tsx`)
**Função:** Grid de serviços oferecidos pelo estúdio.

**Estrutura de dados:**
```typescript
services = [
  {
    icon: LucideIcon,    // Componente de ícone
    title: string,       // Nome do serviço
    description: string  // Descrição do serviço
  },
  // ...
]
```

**Serviços atuais:**
1. Newborn & Bebês
2. Ensaios Individuais
3. Pré Wedding
4. Cobertura de Casamento
5. Cobertura de Aniversário

---

### 7. **AnalyticsProvider** (`src/components/AnalyticsProvider.tsx`)
**Função:** Inicializa ferramentas de tracking (Facebook Pixel + Google Ads).

**Uso:**
```tsx
// Em App.tsx
import AnalyticsProvider from "@/components/AnalyticsProvider";

<AnalyticsProvider>
  <BrowserRouter>
    <Routes>...</Routes>
  </BrowserRouter>
</AnalyticsProvider>
```

**Status:** Desativado por padrão. Ver seção [Sistema de Analytics](#sistema-de-analytics).

---

## 🔄 Fluxo de Dados

### Gerenciamento de Imagens

```
src/config/images.ts
    ↓ (importa assets)
src/assets/*.jpg
    ↓ (exporta arrays)
portfolioImages = {
  feminino: [...],
  mesversario: [...],
  // ...
}
    ↓ (consome)
Components (Hero, Portfolio, Gallery)
```

### Navegação entre Páginas

```
Homepage (Index.tsx)
    ↓ Click "Ver Galeria" em Portfolio
/galeria/feminino
    ↓ VideoHero + Galeria Específica
Lightbox com navegação
    ↓ Botão "Voltar" inteligente
Homepage ou página anterior
```

### Rotas Configuradas

```typescript
// src/App.tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/galeria" element={<Gallery />} />
  <Route path="/galeria/feminino" element={<FemininoGallery />} />
  <Route path="/galeria/mesversario" element={<MesversarioGallery />} />
  <Route path="/galeria/newborn" element={<NewbornGallery />} />
  <Route path="/galeria/formatura" element={<FormaturaGallery />} />
  <Route path="/galeria/profissional" element={<ProfissionalGallery />} />
  <Route path="/galeria/pre-wedding" element={<PreWeddingGallery />} />
  <Route path="/galeria/smash" element={<SmashGallery />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 🖼️ Sistema de Imagens

### Configuração Central

**Arquivo:** `src/config/images.ts`

**Função:** Centralizar importação e organização de todas as imagens do site.

**Estrutura:**
```typescript
// 1. Importações organizadas por categoria
import feminino1Img from "@/assets/feminino-1.jpg";
import feminino4Img from "@/assets/feminino-4.jpg";
// ...

// 2. Array para Hero Carousel (ordem aleatória para variedade visual)
export const heroImages = [
  { image: feminino1Img, title: "Feminino", category: "feminino" },
  { image: newborn4Img, title: "Newborn", category: "newborn" },
  // ...
];

// 3. Objeto organizado por categoria (para galerias)
export const portfolioImages = {
  feminino: [femininoImg, feminino1Img, feminino4Img, ...],
  mesversario: [...],
  // ...
};
```

### Categorias Disponíveis

1. **Feminino** - Ensaios femininos
2. **Mesversário** - Celebração mensal de bebês
3. **Newborn** - Recém-nascidos
4. **Formatura** - Formaturas
5. **Profissional** - Fotos corporativas
6. **Pré Wedding** - Ensaios pré-casamento
7. **Smash** - Smash the Cake

### Como Adicionar Novas Imagens

**Passo a passo:**

1. **Adicione a imagem em `src/assets/`:**
   ```
   src/assets/feminino-novo.jpg
   ```

2. **Importe em `src/config/images.ts`:**
   ```typescript
   import femininoNovoImg from "@/assets/feminino-novo.jpg";
   ```

3. **Adicione ao array da categoria:**
   ```typescript
   export const portfolioImages = {
     feminino: [
       femininoImg, 
       feminino1Img, 
       femininoNovoImg,  // ← Nova imagem
       // ...
     ],
   };
   ```

4. **(Opcional) Adicione ao heroImages:**
   ```typescript
   export const heroImages = [
     // ...
     { image: femininoNovoImg, title: "Feminino", category: "feminino" },
   ];
   ```

**✅ Pronto!** A imagem aparecerá automaticamente em todos os componentes que usam essa categoria.

---

## 📊 Sistema de Analytics

### Arquivo Principal: `src/utils/analytics.tsx`

**Função:** Módulo centralizado para tracking de conversões e eventos.

### Ferramentas Suportadas

1. **Facebook Pixel** - Rastreamento de eventos para campanhas no Facebook/Instagram
2. **Google Ads Tag** - Rastreamento de conversões para Google Ads

### Status Atual: DESATIVADO

Por padrão, o código de tracking está comentado para evitar envio de dados antes da configuração adequada.

### Como Ativar o Tracking

#### 1. **Obter IDs de Tracking**

**Facebook Pixel:**
1. Acesse [Facebook Business Manager](https://business.facebook.com/)
2. Vá em "Eventos" → "Pixels"
3. Copie o Pixel ID (ex: "1234567890")

**Google Ads:**
1. Acesse [Google Ads](https://ads.google.com/)
2. Ferramentas → Conversões → Criar conversão
3. Copie o ID de conversão (ex: "AW-123456789")

#### 2. **Configurar IDs no Código**

**Arquivo:** `src/utils/analytics.tsx`

```typescript
// ========================================
// CONFIGURAÇÃO
// ========================================

// Facebook Pixel ID - Substitua com seu ID quando estiver pronto
const FACEBOOK_PIXEL_ID = "1234567890";  // ← Cole seu ID aqui

// Google Ads Conversion ID - Substitua com seu ID quando estiver pronto
const GOOGLE_ADS_ID = "AW-123456789";  // ← Cole seu ID aqui
```

#### 3. **Descomentar Código de Inicialização**

**Facebook Pixel:**
```typescript
export const initFacebookPixel = () => {
  if (!FACEBOOK_PIXEL_ID) {
    console.log("Facebook Pixel: ID não configurado");
    return;
  }

  // DESCOMENTE O CÓDIGO ABAIXO ↓
  
  // Código do Facebook Pixel
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    // ... resto do código
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
  
};
```

**Google Ads:**
```typescript
export const initGoogleAds = () => {
  if (!GOOGLE_ADS_ID) {
    console.log("Google Ads: ID não configurado");
    return;
  }

  // DESCOMENTE O CÓDIGO ABAIXO ↓
  
  // Adiciona o script do gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
  // ... resto do código
  
};
```

#### 4. **Ativar o AnalyticsProvider**

**Arquivo:** `src/App.tsx`

```tsx
import AnalyticsProvider from "@/components/AnalyticsProvider";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnalyticsProvider>  {/* ← Adicione aqui */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>...</Routes>
        </BrowserRouter>
      </AnalyticsProvider>  {/* ← Feche aqui */}
    </TooltipProvider>
  </QueryClientProvider>
);
```

### Eventos Pré-Configurados

O sistema já inclui funções prontas para rastrear eventos comuns:

#### **trackGalleryView(galleryName)**
Rastreia visualização de galeria.
```tsx
import { trackGalleryView } from "@/utils/analytics";

// No componente da galeria
useEffect(() => {
  trackGalleryView("Feminino");
}, []);
```

#### **trackWhatsAppClick()**
Rastreia clique no botão do WhatsApp.
```tsx
import { trackWhatsAppClick } from "@/utils/analytics";

<a 
  href={whatsappUrl}
  onClick={trackWhatsAppClick}
>
  WhatsApp
</a>
```

#### **trackContactForm()**
Rastreia envio de formulário de contato.
```tsx
import { trackContactForm } from "@/utils/analytics";

const handleSubmit = () => {
  // ... enviar formulário
  trackContactForm();
};
```

#### **trackCategoryView(categoryName)**
Rastreia seleção de categoria no filtro.
```tsx
import { trackCategoryView } from "@/utils/analytics";

const handleCategoryChange = (category: string) => {
  setSelectedCategory(category);
  trackCategoryView(category);
};
```

### Eventos Personalizados

Você pode criar eventos customizados:

**Facebook:**
```tsx
trackFacebookEvent('CustomEvent', { 
  param1: 'value1',
  param2: 'value2'
});
```

**Google Ads:**
```tsx
trackGoogleConversion('ConversionLabel', 100);  // valor em BRL
```

---

## ⚙️ Configuração e Personalização

### Design System

**Arquivo:** `src/index.css`

**Variáveis CSS customizáveis:**

```css
:root {
  /* Cores principais */
  --background: 0 0% 100%;          /* Branco */
  --foreground: 0 0% 10%;           /* Preto suave */
  --primary: 38 92% 50%;            /* Dourado */
  --primary-foreground: 0 0% 98%;   /* Branco quente */
  
  /* Cores secundárias */
  --secondary: 345 82% 85%;         /* Rosa claro */
  --muted: 0 0% 96%;                /* Cinza suave */
  --accent: 345 100% 70%;           /* Rosa vivo */
  
  /* Bordas e sombras */
  --border: 0 0% 90%;
  --shadow-soft: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-glow: 0 10px 30px rgba(245, 158, 11, 0.15);
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, 
    hsl(38, 92%, 50%), 
    hsl(38, 92%, 65%)
  );
  
  /* Transições */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Tipografia:**
- **Títulos:** Playfair Display (serif elegante)
- **Corpo:** Poppins (sans-serif moderna)

### Contatos e Links

**WhatsApp:**
```tsx
// src/components/WhatsAppButton.tsx
const whatsappNumber = "5541999791430";
const whatsappMessage = "Olá! Quero saber mais sobre um ensaio fotográfico.";
```

**Instagram:**
```tsx
// Vários componentes
const instagramUrl = "https://www.instagram.com/studio.manufotografias/";
```

**E-mail:**
```tsx
// src/components/Contact.tsx e Footer.tsx
const email = "studiomanufotografias@gmail.com";
```

### Textos e Conteúdo

**Sobre Mim** (`src/components/About.tsx`):
```tsx
<p className="text-lg text-muted-foreground mb-6">
  Sou Manu, fotógrafa apaixonada por capturar emoções autênticas 
  e eternizar histórias através da luz.
</p>
```

**Depoimentos** (`src/components/Testimonials.tsx`):
```tsx
const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe de João",
    content: "Experiência maravilhosa! Manu capturou perfeitamente...",
    image: "https://i.pravatar.cc/150?img=1"
  },
  // ...
];
```

---

## 🚀 Deployment

### Pré-requisitos
- Node.js 18+ instalado
- npm ou bun como package manager

### Build para Produção

```bash
# Instalar dependências
npm install

# Criar build otimizado
npm run build
```

**Output:** Pasta `dist/` com arquivos estáticos prontos para deploy.

### Opções de Hospedagem

#### 1. **Vercel** (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Vantagens:**
- Deploy automático via Git
- Preview deployments
- CDN global
- SSL grátis

#### 2. **Netlify**
1. Conecte repositório GitHub
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

#### 3. **Hostinger / cPanel**
1. Execute `npm run build`
2. Faça upload da pasta `dist/` via FTP
3. Configure documento raiz para `dist/`

**⚠️ Importante para SPAs:**
Adicione arquivo `dist/_redirects` (Netlify) ou configure rewrite rules (outros) para redirecionar todas as rotas para `index.html`:

```
# Netlify _redirects
/*    /index.html   200

# Apache .htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Variáveis de Ambiente

Se usar features que requerem variáveis de ambiente, crie `.env`:

```env
# Exemplo
VITE_INSTAGRAM_URL=https://www.instagram.com/studio.manufotografias/
VITE_WHATSAPP_NUMBER=5541999791430
```

**Uso no código:**
```tsx
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
```

---

## 📞 Pontos de Integração com Ads

### Para Campanhas de Facebook/Instagram

**Eventos importantes para rastrear:**

1. **PageView** - Automático ao carregar página
2. **ViewContent** - Quando usuário visualiza galeria
3. **Contact** - Click no WhatsApp
4. **Lead** - Envio de formulário (futuro)

**Setup:**
1. Configure FACEBOOK_PIXEL_ID em `src/utils/analytics.tsx`
2. Descomente código do `initFacebookPixel()`
3. Ative `<AnalyticsProvider>` em `src/App.tsx`
4. Teste com Facebook Pixel Helper extension

**Públicos Personalizados Recomendados:**
- Visitantes da galeria Feminino
- Cliques no WhatsApp nos últimos 30 dias
- Pessoas que visualizaram 3+ categorias

### Para Campanhas do Google Ads

**Conversões importantes:**

1. **WhatsApp_Contact** - Click no botão do WhatsApp
2. **Contact_Form** - Envio de formulário (futuro)
3. **Gallery_View** - Visualização de galeria específica

**Setup:**
1. Configure GOOGLE_ADS_ID em `src/utils/analytics.tsx`
2. Descomente código do `initGoogleAds()`
3. Configure labels de conversão no Google Ads
4. Atualize `trackGoogleConversion()` com labels corretos

**Remarketing Recomendado:**
- Pessoas que visitaram galeria mas não clicaram no WhatsApp
- Visitantes que visualizaram múltiplas categorias

---

## 🔧 Troubleshooting

### Imagens não aparecem
**Causa:** Caminho de importação incorreto
**Solução:** Verifique que todas as imagens estão em `src/assets/` e importadas em `src/config/images.ts`

### Build falha
**Causa:** Erro de TypeScript
**Solução:** Execute `npm run build` e corrija erros reportados

### Rotas 404 em produção
**Causa:** Servidor não configurado para SPA
**Solução:** Configure redirects/rewrites conforme seção [Deployment](#deployment)

### Analytics não rastreiam
**Causa:** Código ainda comentado
**Solução:** Siga instruções em [Sistema de Analytics](#sistema-de-analytics)

---

## 📝 Notas Finais

### Boas Práticas

✅ **Sempre teste localmente antes de deploy:**
```bash
npm run dev
```

✅ **Otimize novas imagens antes de adicionar:**
- Redimensione para no máximo 1920px de largura
- Use ferramentas como TinyPNG para comprimir
- Mantenha formato .jpg para fotos

✅ **Mantenha commits organizados:**
```bash
git add .
git commit -m "feat: adiciona nova categoria de ensaios"
git push
```

✅ **Teste em múltiplos dispositivos:**
- Desktop (1920px+)
- Tablet (768-1024px)
- Mobile (320-767px)

### Suporte e Manutenção

**Para adicionar novas funcionalidades:**
1. Consulte esta documentação
2. Siga os padrões de código existentes
3. Teste em ambiente local
4. Deploy em staging antes de produção

**Para reportar problemas:**
- Descreva o comportamento esperado vs atual
- Inclua screenshots se possível
- Informe navegador e dispositivo

---

**Documentação criada em:** ${new Date().toLocaleDateString('pt-BR')}  
**Versão do projeto:** 2.0  
**Status:** ✅ Produção

---

## 🎨 Resumo Visual do Fluxo

```
Usuário acessa homepage
    ↓
Visualiza Hero Carousel (todas categorias)
    ↓
Rola para seção Portfolio
    ↓
Filtra por categoria (ex: Feminino)
    ↓
Clica em "Ver Galeria"
    ↓
Redireciona para /galeria/feminino
    ↓
Visualiza grid Instagram-style
    ↓
Clica em foto → Abre lightbox
    ↓
Navega entre fotos (←  →)
    ↓
Clica em "Voltar"
    ↓
Retorna para homepage ou página anterior
    ↓
Clica no botão WhatsApp (canto inferior direito)
    ↓
Abre conversa com mensagem pré-preenchida
    
[TRACKING]
Todos os eventos acima podem ser rastreados via
Facebook Pixel e Google Ads (quando ativado)
```

---

**🎉 Fim da Documentação Técnica**

Para dúvidas ou sugestões de melhorias nesta documentação, entre em contato com o desenvolvedor.
