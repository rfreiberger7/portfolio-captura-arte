// ============================================
// CONFIGURAÇÃO CENTRALIZADA DE IMAGENS
// ============================================
// Para trocar as imagens do site, substitua os arquivos em src/assets
// ou atualize os imports abaixo com os novos arquivos

// === GESTANTE ===
import gestante2Img from "@/assets/gestante-2.jpg";
import gestante6Img from "@/assets/gestante-6.jpg";
import gestante23Img from "@/assets/gestante-23.jpg";
import gestante31Img from "@/assets/gestante-31.jpg";

// === MESVERSÁRIO ===
import mesversario2Img from "@/assets/mesversario-2.jpg";
import mesversario4Img from "@/assets/mesversario-4.jpg";
import mesversario98Img from "@/assets/mesversario-98.jpg";
import mesversario109Img from "@/assets/mesversario-109.jpg";
import mesversario146Img from "@/assets/mesversario-146.jpg";

// === FEMININO ===
import feminino1Img from "@/assets/feminino-1.jpg";
import feminino4Img from "@/assets/feminino-4.jpg";
import feminino5Img from "@/assets/feminino-5.jpg";
import feminino13Img from "@/assets/feminino-13.jpg";
import feminino15Img from "@/assets/feminino-15.jpg";

// === FORMATURA ===
import formatura4Img from "@/assets/formatura-4.jpg";

// === NEWBORN ===
import newborn4Img from "@/assets/newborn-4.jpg";
import newborn17Img from "@/assets/newborn-17.jpg";
import newborn25Img from "@/assets/newborn-25.jpg";
import newborn28Img from "@/assets/newborn-28.jpg";

// === PROFISSIONAL ===
import profissional5Img from "@/assets/profissional-5.jpg";
import profissional6Img from "@/assets/profissional-6.jpg";
import profissional7Img from "@/assets/profissional-7.jpg";
import profissional8Img from "@/assets/profissional-8.jpg";

// === PRÉ-WEDDING ===
import preWedding2Img from "@/assets/pre-wedding-2.jpg";
import preWedding3Img from "@/assets/pre-wedding-3.jpg";

// === SMASH ===
import smash8Img from "@/assets/smash-8.jpg";
import smash10Img from "@/assets/smash-10.jpg";
import smash24Img from "@/assets/smash-24.jpg";
import smash26Img from "@/assets/smash-26.jpg";

// Imagens da seção Sobre
import photographerImg from "@/assets/photographer-portrait.jpg";

// Imagens do Hero Shop (caso você adicione uma loja)
import heroMainImg from "@/assets/hero-main.jpg";

// Carrossel principal - ordem variada para criar fluxo visual agradável
export const heroImages = [
  { image: feminino1Img, title: "Feminino", category: "feminino" },
  { image: newborn4Img, title: "Newborn", category: "newborn" },
  { image: mesversario4Img, title: "Mesversário", category: "mesversario" },
  { image: profissional5Img, title: "Profissional", category: "profissional" },
  { image: gestante2Img, title: "Gestante", category: "gestante" },
  { image: smash8Img, title: "Smash", category: "smash" },
  { image: feminino4Img, title: "Feminino", category: "feminino" },
  { image: preWedding2Img, title: "Ensaio Pré Wedding", category: "preWedding" },
  { image: mesversario98Img, title: "Mesversário", category: "mesversario" },
  { image: newborn17Img, title: "Newborn", category: "newborn" },
  { image: formatura4Img, title: "Formatura", category: "formatura" },
  { image: gestante6Img, title: "Gestante", category: "gestante" },
  { image: profissional6Img, title: "Profissional", category: "profissional" },
  { image: smash10Img, title: "Smash", category: "smash" },
  { image: feminino5Img, title: "Feminino", category: "feminino" },
  { image: mesversario109Img, title: "Mesversário", category: "mesversario" },
  { image: newborn25Img, title: "Newborn", category: "newborn" },
  { image: preWedding3Img, title: "Ensaio Pré Wedding", category: "preWedding" },
  { image: gestante23Img, title: "Gestante", category: "gestante" },
  { image: profissional7Img, title: "Profissional", category: "profissional" },
  { image: feminino13Img, title: "Feminino", category: "feminino" },
  { image: smash24Img, title: "Smash", category: "smash" },
  { image: mesversario146Img, title: "Mesversário", category: "mesversario" },
  { image: newborn28Img, title: "Newborn", category: "newborn" },
  { image: gestante31Img, title: "Gestante", category: "gestante" },
  { image: profissional8Img, title: "Profissional", category: "profissional" },
  { image: feminino15Img, title: "Feminino", category: "feminino" },
  { image: smash26Img, title: "Smash", category: "smash" },
  { image: mesversario2Img, title: "Mesversário", category: "mesversario" },
];

// Imagens do portfólio organizadas por categoria
export const portfolioImages = {
  gestante: [gestante2Img, gestante6Img, gestante23Img, gestante31Img],
  mesversario: [mesversario2Img, mesversario4Img, mesversario98Img, mesversario109Img, mesversario146Img],
  feminino: [feminino1Img, feminino4Img, feminino5Img, feminino13Img, feminino15Img],
  formatura: [formatura4Img],
  newborn: [newborn4Img, newborn17Img, newborn25Img, newborn28Img],
  profissional: [profissional5Img, profissional6Img, profissional7Img, profissional8Img],
  preWedding: [preWedding2Img, preWedding3Img],
  smash: [smash8Img, smash10Img, smash24Img, smash26Img],
};

export const aboutImages = {
  photographer: photographerImg,
};

export const shopImages = {
  heroMain: heroMainImg,
};
