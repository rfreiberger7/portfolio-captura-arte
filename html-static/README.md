# Studio Manu Fotografias - Site HTML Estático

Site institucional do Studio Manu Fotografias, desenvolvido em HTML, CSS e JavaScript puros, pronto para hospedagem em servidor compartilhado Hostinger.

## 📋 O que foi criado

Este é um **site totalmente estático** convertido do React original, mantendo:
- ✅ Mesmo design visual (cores douradas, tipografia Playfair + Poppins)
- ✅ Todas as seções originais (Hero, Sobre, Portfólio, Serviços, Contato, etc.)
- ✅ Galeria com filtros por categoria
- ✅ Carrossel de imagens
- ✅ Lightbox para visualização de fotos
- ✅ Menu mobile responsivo
- ✅ Botão WhatsApp flutuante
- ✅ 100% compatível com hospedagem compartilhada

## 📁 Estrutura de Arquivos

```
html-static/
├── index.html              # Página principal
├── galeria.html            # Página da galeria
├── css/
│   └── styles.css         # Todos os estilos
├── js/
│   ├── scripts.js         # Scripts da página principal
│   └── gallery.js         # Scripts da galeria
├── img/                    # ⚠️ VOCÊ PRECISA CRIAR ESTA PASTA
│   └── (suas imagens aqui)
└── README.md              # Este arquivo
```

## 🖼️ IMPORTANTE: Adicionar suas imagens

O site está pronto, mas você precisa **copiar suas imagens** para a pasta `img/`. 

### Como fazer:

1. **Crie a pasta `img/`** dentro de `html-static/`
2. **Copie TODAS as imagens** da pasta `src/assets/` do projeto React para `img/`
3. **Inclua também o `logo.png`** da pasta `public/`

### Lista completa de imagens necessárias:

```
img/
├── logo.png
├── photographer-portrait.jpg
├── gestante.jpg
├── milk-bath-gestante.jpg
├── feminino.jpg
├── feminino-1.jpg
├── feminino-4.jpg
├── feminino-5.jpg
├── feminino-13.jpg
├── feminino-15.jpg
├── mesversario.jpg
├── mesversario-2.jpg
├── mesversario-4.jpg
├── mesversario-98.jpg
├── mesversario-109.jpg
├── mesversario-146.jpg
├── formatura.jpg
├── formatura-4.jpg
├── newborn-4.jpg
├── newborn-17.jpg
├── newborn-25.jpg
├── newborn-28.jpg
├── profissional.jpg
├── profissional-5.jpg
├── profissional-6.jpg
├── profissional-7.jpg
├── profissional-8.jpg
├── pre-wedding.jpg
├── pre-wedding-2.jpg
├── pre-wedding-3.jpg
├── smash.jpg
├── smash-8.jpg
├── smash-10.jpg
├── smash-24.jpg
└── smash-26.jpg
```

## 🚀 Como Hospedar na Hostinger

### Opção 1: Via Gerenciador de Arquivos (Mais Fácil)

1. **Acesse o Painel Hostinger**
   - Entre em hpanel.hostinger.com
   - Faça login com suas credenciais

2. **Abra o Gerenciador de Arquivos**
   - Clique em "Arquivos" → "Gerenciador de Arquivos"
   - Navegue até a pasta `public_html`

3. **Faça Upload dos Arquivos**
   - Clique em "Upload" no topo
   - Selecione TODOS os arquivos e pastas de `html-static/`
   - Aguarde o upload completar

4. **Verifique a estrutura**
   ```
   public_html/
   ├── index.html
   ├── galeria.html
   ├── css/
   ├── js/
   └── img/
   ```

5. **Acesse seu site**
   - Digite seu domínio no navegador (ex: seusite.com)
   - O site deve carregar normalmente!

### Opção 2: Via FTP (Para quem tem experiência)

1. **Baixe um cliente FTP**
   - FileZilla (recomendado): https://filezilla-project.org/
   
2. **Conecte-se via FTP**
   - Host: seu-dominio.com (ou IP fornecido pela Hostinger)
   - Usuário: fornecido no email da Hostinger
   - Senha: a que você criou
   - Porta: 21

3. **Faça Upload**
   - Navegue até `public_html/` no servidor
   - Arraste todos os arquivos de `html-static/` para lá

4. **Confirme**
   - Acesse seu domínio e veja o site no ar!

## 🔧 Personalizações Futuras

### Trocar Imagens
Basta substituir os arquivos na pasta `img/` mantendo os mesmos nomes.

### Mudar Textos
Edite diretamente os arquivos HTML (`index.html` e `galeria.html`).

### Alterar Cores
Edite o arquivo `css/styles.css`, procure por `:root` no início:
```css
:root {
    --color-primary: hsl(38, 90%, 65%);  /* Cor principal */
    --color-accent: hsl(38, 80%, 70%);   /* Cor de destaque */
    /* ... */
}
```

### Adicionar Mais Fotos na Galeria
1. Adicione a imagem na pasta `img/`
2. Edite `js/gallery.js`
3. Adicione o caminho da imagem no array da categoria correspondente:
```javascript
feminino: [
    'img/feminino.jpg',
    'img/sua-nova-foto.jpg',  // ← Adicione aqui
],
```

## ✅ Checklist Final

Antes de fazer upload:
- [ ] Pasta `img/` criada com todas as imagens
- [ ] `logo.png` incluído
- [ ] Todas as 30+ fotos copiadas
- [ ] Testado localmente (abra `index.html` no navegador)

## 📞 Suporte

Se tiver dúvidas sobre hospedagem na Hostinger:
- Chat Hostinger: disponível 24/7 no painel
- Email: suporte@hostinger.com.br

## 🎉 Pronto!

Seu site está 100% pronto para ir ao ar. Basta copiar as imagens e fazer o upload! 

**Nenhum conhecimento técnico adicional é necessário.** 🚀