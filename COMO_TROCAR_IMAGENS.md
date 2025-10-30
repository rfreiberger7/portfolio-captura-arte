# 📸 Como Trocar as Imagens do Site

## Método Simples (Recomendado)

Todas as imagens do site estão centralizadas no arquivo `src/config/images.ts`.

### Passo a Passo:

1. **Adicione suas novas imagens** na pasta `src/assets/`
   - Exemplo: coloque `minha-foto.jpg` em `src/assets/minha-foto.jpg`

2. **Abra o arquivo** `src/config/images.ts`

3. **Substitua os imports** das imagens que você quer trocar
   
   **Exemplo - Trocar foto do Hero:**
   ```typescript
   // ANTES
   import eventosImg from "@/assets/eventos.jpg";
   
   // DEPOIS
   import eventosImg from "@/assets/minha-nova-foto-eventos.jpg";
   ```

4. **Salve o arquivo** e o site será atualizado automaticamente!

---

## 📋 Guia Completo de Imagens

### 🎠 Carrossel Principal (Hero)
Localização no código: `heroImages`

- **eventos** - Foto da categoria Eventos
- **gestante** - Foto da categoria Gestante  
- **newborn** - Foto da categoria Newborn
- **infantil** - Foto da categoria Infantil
- **geek** - Foto da categoria Geek
- **acompanhamento** - Foto da categoria Acompanhamento Infantil

### 🖼️ Portfólio
Localização no código: `portfolioImages`

- **personal** - Ensaio Pessoal
- **wedding** - Casamento
- **corporate** - Retrato Profissional
- **event** - Evento Familiar
- **couple** - Ensaio Casal

### 👤 Seção Sobre
Localização no código: `aboutImages`

- **photographer** - Foto da fotógrafa (você!)

### 🛍️ Loja (se aplicável)
Localização no código: `shopImages`

- **heroMain** - Banner principal da loja

---

## 💡 Dicas Importantes

✅ **Formatos recomendados:** JPG, PNG, WEBP  
✅ **Tamanho ideal:** Máximo 2MB por imagem  
✅ **Resolução recomendada:**
  - Hero/Carrossel: 1920x1080px ou similar
  - Portfólio: 1200x1600px (vertical)
  - Foto "Sobre": 800x1000px

⚠️ **Atenção:** Mantenha os nomes das imagens em inglês e sem espaços (use `-` ou `_`)

---

## 🔧 Exemplo Prático Completo

Vamos trocar TODAS as imagens do Hero de uma vez:

```typescript
// Arquivo: src/config/images.ts

// 1. Coloque suas 6 novas fotos na pasta src/assets/
// 2. Atualize os imports:

import eventosImg from "@/assets/nova-eventos.jpg";
import gestanteImg from "@/assets/nova-gestante.jpg";
import newbornImg from "@/assets/nova-newborn.jpg";
import infantilImg from "@/assets/nova-infantil.jpg";
import geekImg from "@/assets/nova-geek.jpg";
import acompanhamentoImg from "@/assets/nova-acompanhamento.jpg";

// Pronto! O resto do código continua igual.
```

---

## ❓ Precisa de Ajuda?

Se precisar adicionar NOVAS categorias ou mudar algo além das imagens, é só me chamar no chat! 😊
