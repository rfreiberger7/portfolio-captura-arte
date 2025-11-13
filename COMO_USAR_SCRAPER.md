# 🤖 Guia Completo - Extrator Automático de Propostas

## 📋 O que este script faz?

Este script automatiza 100% o processo de extração dos dados da tabela de propostas exportadas, incluindo:

✅ Login automático no sistema  
✅ Navegação até a página de propostas  
✅ Extração de todas as colunas da tabela  
✅ Clique automático em cada nome verde (consultor)  
✅ Captura do código de representação no modal  
✅ Exportação para Excel organizado  
✅ Salvamento automático de progresso  

---

## 🛠️ PASSO 1: Instalar Python

### Windows
1. Baixe Python em: https://www.python.org/downloads/
2. Durante instalação, **marque a opção "Add Python to PATH"**
3. Clique em "Install Now"

### Mac
```bash
brew install python3
```

### Linux
```bash
sudo apt update
sudo apt install python3 python3-pip
```

---

## 🛠️ PASSO 2: Instalar Google Chrome

O script usa o Chrome. Se não tiver instalado:
- Windows/Mac: https://www.google.com/chrome/
- Linux: `sudo apt install google-chrome-stable`

---

## 🛠️ PASSO 3: Instalar Dependências

Abra o terminal/prompt na pasta onde salvou os arquivos e execute:

```bash
pip install -r requirements.txt
```

Ou instale manualmente:
```bash
pip install selenium pandas openpyxl webdriver-manager
```

---

## 🚀 PASSO 4: Executar o Script

### Modo Simples (Interface Interativa)

```bash
python web_scraper_contratacao.py
```

O script vai pedir:
1. **Usuário** do sistema
2. **Senha** do sistema
3. **Teste**: Digite `S` para testar com 10 linhas ou `N` para extrair tudo

### Modo Teste (Recomendado para primeira execução)

```bash
python web_scraper_contratacao.py
```
- Quando perguntar sobre teste, digite **S**
- Isso vai extrair apenas 10 linhas para você verificar se está funcionando

### Modo Completo (Todas as 25.199 linhas)

```bash
python web_scraper_contratacao.py
```
- Quando perguntar sobre teste, digite **N**
- O processo vai demorar várias horas (aproximadamente 5-8 horas)

---

## 📊 O que acontece durante a execução?

```
🔧 Configurando navegador...
✅ Navegador configurado!

🔐 Fazendo login...
✅ Login realizado!

📍 Navegando para propostas exportadas...
✅ Página carregada!

📊 Iniciando extração de dados...
📝 Total de linhas encontradas: 25199
🎯 Extraindo 25199 linhas...

✅ Linha 1 extraída: Raimunda Palmerim Ferreira - Código: W5XT51ML8B
✅ Linha 2 extraída: Benedito Nerval Nascimento Sousa - Código: ABC123XYZ
✅ Linha 3 extraída: Marcus Johnny de Morais Alves - Código: DEF456GHI
...

💾 Progresso salvo! (50/25199)
...

✅ Extração concluída!
   Sucessos: 25199
   Erros: 0

💾 Salvando arquivo Excel: propostas_exportadas_20250213_143022.xlsx
✅ Arquivo salvo: /caminho/completo/propostas_exportadas_20250213_143022.xlsx
📊 Total de registros: 25199
```

---

## 💾 Arquivos Gerados

### 1. `propostas_exportadas_[DATA]_[HORA].xlsx`
Arquivo final com todas as colunas:
- CONCESSIONÁRIA
- OPERADORA
- CONSULTOR
- **CÓDIGO** ← Código de representação extraído do modal
- PROPOSTA
- TITULAR
- PRODUTO
- ENTIDADE
- VIGÊNCIA

### 2. `progresso_extracao.xlsx`
Arquivo de backup automático salvo a cada 50 linhas extraídas.

---

## ⏱️ Tempo Estimado

- **Teste (10 linhas)**: ~1 minuto
- **100 linhas**: ~10 minutos
- **1000 linhas**: ~1h30min
- **25.199 linhas completas**: ~5-8 horas

**Dica**: Deixe rodando durante a noite ou enquanto faz outras tarefas.

---

## 🔧 Personalização do Script

### Mudar velocidade de extração

No arquivo `web_scraper_contratacao.py`, localize:

```python
time.sleep(2)  # Tempo de espera após clicar
```

- Aumente o número para ir mais devagar (mais seguro)
- Diminua o número para ir mais rápido (pode causar erros)

### Rodar sem abrir janela do navegador

Descomente esta linha:

```python
# chrome_options.add_argument('--headless')
```

Deixe assim:
```python
chrome_options.add_argument('--headless')
```

### Salvar progresso com mais frequência

Localize:
```python
if (i + 1) % 50 == 0:  # Salva a cada 50 linhas
```

Mude para:
```python
if (i + 1) % 10 == 0:  # Salva a cada 10 linhas
```

---

## ❌ Solução de Problemas

### Erro: "chromedriver not found"

```bash
pip install webdriver-manager
```

### Erro: "Login falhou"

Verifique:
1. Usuário e senha estão corretos
2. Você consegue fazer login manualmente no site
3. O site não mudou os campos de login

### Erro: "Element not found"

O site pode ter mudado a estrutura. Ajuste os seletores CSS no script.

### Script muito lento

1. Diminua os `time.sleep()` no código
2. Use um computador mais rápido
3. Melhore sua conexão de internet

### Progresso perdido

O script salva automaticamente a cada 50 linhas no arquivo `progresso_extracao.xlsx`.

---

## 🎯 Dicas Importantes

1. **Teste primeiro**: Sempre rode com 10 linhas antes de extrair tudo
2. **Internet estável**: Use conexão de internet confiável
3. **Não feche o navegador**: Deixe o Chrome rodando
4. **Backup automático**: O progresso é salvo automaticamente
5. **Paciência**: 25 mil linhas levam tempo!

---

## 📞 Suporte

Se tiver problemas:
1. Leia as mensagens de erro com atenção
2. Verifique se seguiu todos os passos de instalação
3. Teste com poucas linhas primeiro (modo teste)
4. Verifique se o site não mudou de estrutura

---

## ✅ Checklist Final

Antes de rodar o script completo, verifique:

- [ ] Python 3.8+ instalado
- [ ] Google Chrome instalado
- [ ] Dependências instaladas (`pip install -r requirements.txt`)
- [ ] Teste com 10 linhas funcionou perfeitamente
- [ ] Você tem usuário e senha válidos
- [ ] Internet está estável
- [ ] Tem espaço em disco (arquivo final ~50MB)

---

**🎉 Pronto! Agora é só executar e aguardar a mágica acontecer!**
