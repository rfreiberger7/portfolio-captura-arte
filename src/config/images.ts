// ============================================
// CONFIGURAÇÃO CENTRALIZADA DE IMAGENS
// ============================================
// Para trocar as imagens do site, substitua os arquivos em src/assets
// ou atualize os imports abaixo com os novos arquivos

// === MESVERSÁRIO ===
import mesversarioImg from "@/assets/mesversario.jpg";
import mesversario2Img from "@/assets/mesversario-2.jpg";
import mesversario4Img from "@/assets/mesversario-4.jpg";
import mesversario98Img from "@/assets/mesversario-98.jpg";
import mesversario109Img from "@/assets/mesversario-109.jpg";
import mesversario146Img from "@/assets/mesversario-146.jpg";

// === FEMININO ===
import feminino4Img from "@/assets/feminino-4.jpg";
import feminino13Img from "@/assets/feminino-13.jpg";

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

// === GESTANTE ===
import gestante2Img from "@/assets/gestante-2.jpg";
import gestante13Img from "@/assets/gestante-13.jpg";
import gestante16Img from "@/assets/gestante-16.jpg";
import gestante19Img from "@/assets/gestante-19.jpg";
import gestante28Img from "@/assets/gestante-28.jpg";
import gestante71Img from "@/assets/gestante-71.jpg";
import gestante82Img from "@/assets/gestante-82.jpg";

// === CASAMENTO ===
import casamento2Img from "@/assets/casamento-2.jpg";
import casamento20Img from "@/assets/casamento-20.jpg";
import casamento23Img from "@/assets/casamento-23.jpg";
import casamento22Img from "@/assets/casamento-2-2.jpg";
import casamento5Img from "@/assets/casamento-5.jpg";
import casamento6Img from "@/assets/casamento-6.jpg";
import casamento9Img from "@/assets/casamento-9.jpg";
import casamento10Img from "@/assets/casamento-10.jpg";
import casamento11Img from "@/assets/casamento-11.jpg";
import casamento15Img from "@/assets/casamento-15.jpg";
import casamento202Img from "@/assets/casamento-20-2.jpg";
import casamento21Img from "@/assets/casamento-21.jpg";
import casamento29Img from "@/assets/casamento-29.jpg";


// Carrossel principal - ordem: newborn -> gestante -> outras categorias -> feminino por último
export const heroImages = [
  { image: newborn4Img, title: "Newborn", category: "newborn" },
  { image: newborn17Img, title: "Newborn", category: "newborn" },
  { image: gestante16Img, title: "Gestante", category: "gestante" },
  { image: gestante13Img, title: "Gestante", category: "gestante" },
  { image: gestante82Img, title: "Gestante", category: "gestante" },
  { image: gestante71Img, title: "Gestante", category: "gestante" },
  { image: newborn25Img, title: "Newborn", category: "newborn" },
  { image: newborn28Img, title: "Newborn", category: "newborn" },
  { image: mesversario4Img, title: "Mesversário", category: "mesversario" },
  { image: mesversario98Img, title: "Mesversário", category: "mesversario" },
  { image: profissional5Img, title: "Profissional", category: "profissional" },
  { image: profissional6Img, title: "Profissional", category: "profissional" },
  { image: smash8Img, title: "Smash", category: "smash" },
  { image: smash10Img, title: "Smash", category: "smash" },
  { image: casamento6Img, title: "Casamento", category: "casamento" },
  { image: casamento15Img, title: "Casamento", category: "casamento" },
  { image: casamento29Img, title: "Casamento", category: "casamento" },
  { image: preWedding2Img, title: "Ensaio Pré Wedding", category: "preWedding" },
  { image: preWedding3Img, title: "Ensaio Pré Wedding", category: "preWedding" },
  { image: mesversario109Img, title: "Mesversário", category: "mesversario" },
  { image: mesversario146Img, title: "Mesversário", category: "mesversario" },
  { image: profissional7Img, title: "Profissional", category: "profissional" },
  { image: profissional8Img, title: "Profissional", category: "profissional" },
  { image: smash24Img, title: "Smash", category: "smash" },
  { image: smash26Img, title: "Smash", category: "smash" },
  { image: formatura4Img, title: "Formatura", category: "formatura" },
  { image: casamento2Img, title: "Casamento", category: "casamento" },
  { image: mesversario2Img, title: "Mesversário", category: "mesversario" },
  { image: feminino4Img, title: "Feminino", category: "feminino" },
  { image: feminino13Img, title: "Feminino", category: "feminino" }
];

// Imagens do portfólio organizadas por categoria
export const portfolioImages = {
  newborn: [newborn4Img, newborn17Img, newborn25Img, newborn28Img],
  gestante: [gestante16Img, gestante13Img, gestante82Img, gestante71Img, gestante28Img, gestante19Img, gestante2Img],
  mesversario: [mesversarioImg, mesversario2Img, mesversario4Img, mesversario98Img, mesversario109Img, mesversario146Img],
  smash: [smash8Img, smash10Img, smash24Img, smash26Img],
  casamento: [
    casamento2Img, 
    casamento20Img, 
    casamento23Img, 
    casamento22Img, 
    casamento5Img, 
    casamento6Img, 
    casamento9Img, 
    casamento10Img, 
    casamento11Img, 
    casamento15Img, 
    casamento202Img, 
    casamento21Img, 
    casamento29Img
  ],
  preWedding: [preWedding2Img, preWedding3Img],
  profissional: [profissional5Img, profissional6Img, profissional7Img, profissional8Img],
  formatura: [formatura4Img],
  feminino: [feminino4Img, feminino13Img],
};
