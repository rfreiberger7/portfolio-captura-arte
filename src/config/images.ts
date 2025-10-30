// ============================================
// CONFIGURAÇÃO CENTRALIZADA DE IMAGENS
// ============================================
// Para trocar as imagens do site, substitua os arquivos em src/assets
// ou atualize os imports abaixo com os novos arquivos

// Imagens do Hero (Carrossel principal)
import eventosImg from "@/assets/eventos.jpg";
import gestanteImg from "@/assets/gestante.jpg";
import newbornImg from "@/assets/hero-newborn.jpg";
import infantilImg from "@/assets/infantil.jpg";
import geekImg from "@/assets/geek.jpg";
import acompanhamentoImg from "@/assets/acompanhamento.jpg";

// Imagens do Portfólio
import personalImg from "@/assets/portfolio-personal.jpg";
import weddingImg from "@/assets/portfolio-wedding.jpg";
import corporateImg from "@/assets/portfolio-corporate.jpg";
import eventImg from "@/assets/portfolio-event.jpg";
import coupleImg from "@/assets/portfolio-couple.jpg";

// Imagens da seção Sobre
import photographerImg from "@/assets/photographer-portrait.jpg";

// Imagens do Hero Shop (caso você adicione uma loja)
import heroMainImg from "@/assets/hero-main.jpg";

export const heroImages = {
  eventos: eventosImg,
  gestante: gestanteImg,
  newborn: newbornImg,
  infantil: infantilImg,
  geek: geekImg,
  acompanhamento: acompanhamentoImg,
};

export const portfolioImages = {
  personal: personalImg,
  wedding: weddingImg,
  corporate: corporateImg,
  event: eventImg,
  couple: coupleImg,
};

export const aboutImages = {
  photographer: photographerImg,
};

export const shopImages = {
  heroMain: heroMainImg,
};
