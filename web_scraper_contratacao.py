#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de Extração Automática - Sistema de Contratação
Extrai dados da tabela de propostas exportadas incluindo código de representação
"""

import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from datetime import datetime
import os

class ExtratorContratacao:
    def __init__(self, usuario, senha):
        """Inicializa o extrator com credenciais de login"""
        self.usuario = usuario
        self.senha = senha
        self.driver = None
        self.dados_extraidos = []
        
    def configurar_driver(self):
        """Configura o Chrome WebDriver"""
        print("🔧 Configurando navegador...")
        chrome_options = Options()
        # chrome_options.add_argument('--headless')  # Descomente para rodar sem abrir janela
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--start-maximized')
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.implicitly_wait(10)
        print("✅ Navegador configurado!")
        
    def fazer_login(self):
        """Realiza login no sistema"""
        print("\n🔐 Fazendo login...")
        self.driver.get('https://contratacao.mktss.com.br/')
        
        # Aguarda página carregar
        time.sleep(3)
        
        # Localiza e preenche campos de login
        try:
            campo_usuario = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='text'], input[ng-model*='usuario'], input[placeholder*='Usuário']"))
            )
            campo_senha = self.driver.find_element(By.CSS_SELECTOR, "input[type='password'], input[ng-model*='senha']")
            
            campo_usuario.clear()
            campo_usuario.send_keys(self.usuario)
            
            campo_senha.clear()
            campo_senha.send_keys(self.senha)
            
            # Clica no botão de login
            botao_login = self.driver.find_element(By.CSS_SELECTOR, "button[type='submit'], button.btn-primary, input[type='submit']")
            botao_login.click()
            
            print("✅ Login realizado!")
            time.sleep(3)
            
        except Exception as e:
            print(f"❌ Erro no login: {str(e)}")
            raise
            
    def navegar_para_propostas(self):
        """Navega até a página de propostas exportadas"""
        print("\n📍 Navegando para propostas exportadas...")
        self.driver.get('https://contratacao.mktss.com.br/#/propostaexportadaoperadora')
        time.sleep(5)  # Aguarda AngularJS carregar
        print("✅ Página carregada!")
        
    def extrair_dados_linha(self, linha, index):
        """Extrai dados de uma linha da tabela incluindo código"""
        try:
            # Extrai dados visíveis da linha
            colunas = linha.find_elements(By.TAG_NAME, "td")
            
            concessionaria = colunas[0].text.strip()
            operadora = colunas[1].text.strip()
            consultor_nome = colunas[2].text.strip()
            proposta = colunas[3].text.strip()
            titular = colunas[4].text.strip()
            produto = colunas[5].text.strip()
            entidade = colunas[6].text.strip()
            vigencia = colunas[7].text.strip()
            
            # Clica no nome do consultor (texto verde)
            link_consultor = colunas[2].find_element(By.CSS_SELECTOR, "a, span[style*='green'], .text-success")
            link_consultor.click()
            
            # Aguarda modal abrir
            time.sleep(2)
            modal = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, ".modal-content, .modal, [role='dialog']"))
            )
            
            # Extrai código de representação
            campo_codigo = modal.find_element(By.CSS_SELECTOR, "input[type='text'], input.form-control")
            codigo_representacao = campo_codigo.get_attribute('value')
            
            # Fecha modal
            botao_fechar = modal.find_element(By.CSS_SELECTOR, "button:contains('Cancelar'), button.btn-default, .close")
            botao_fechar.click()
            time.sleep(1)
            
            # Armazena dados
            registro = {
                'CONCESSIONÁRIA': concessionaria,
                'OPERADORA': operadora,
                'CONSULTOR': consultor_nome,
                'CÓDIGO': codigo_representacao,
                'PROPOSTA': proposta,
                'TITULAR': titular,
                'PRODUTO': produto,
                'ENTIDADE': entidade,
                'VIGÊNCIA': vigencia
            }
            
            self.dados_extraidos.append(registro)
            print(f"✅ Linha {index + 1} extraída: {consultor_nome} - Código: {codigo_representacao}")
            
            return True
            
        except Exception as e:
            print(f"⚠️ Erro na linha {index + 1}: {str(e)}")
            return False
            
    def extrair_todas_linhas(self, limite=None):
        """Extrai dados de todas as linhas da tabela"""
        print("\n📊 Iniciando extração de dados...")
        
        # Localiza todas as linhas da tabela
        linhas = self.driver.find_elements(By.CSS_SELECTOR, "table tbody tr")
        total_linhas = len(linhas) if not limite else min(len(linhas), limite)
        
        print(f"📝 Total de linhas encontradas: {len(linhas)}")
        print(f"🎯 Extraindo {total_linhas} linhas...\n")
        
        sucesso = 0
        erros = 0
        
        for i, linha in enumerate(linhas[:total_linhas]):
            if self.extrair_dados_linha(linha, i):
                sucesso += 1
            else:
                erros += 1
                
            # Salva progresso a cada 50 linhas
            if (i + 1) % 50 == 0:
                self.salvar_progresso()
                print(f"\n💾 Progresso salvo! ({i + 1}/{total_linhas})\n")
                
        print(f"\n✅ Extração concluída!")
        print(f"   Sucessos: {sucesso}")
        print(f"   Erros: {erros}")
        
    def salvar_progresso(self):
        """Salva dados extraídos em arquivo temporário"""
        if self.dados_extraidos:
            df = pd.DataFrame(self.dados_extraidos)
            df.to_excel('progresso_extracao.xlsx', index=False)
            
    def exportar_para_excel(self, nome_arquivo=None):
        """Exporta dados extraídos para Excel"""
        if not self.dados_extraidos:
            print("⚠️ Nenhum dado para exportar!")
            return
            
        if not nome_arquivo:
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            nome_arquivo = f'propostas_exportadas_{timestamp}.xlsx'
            
        print(f"\n💾 Salvando arquivo Excel: {nome_arquivo}")
        
        df = pd.DataFrame(self.dados_extraidos)
        
        # Cria Excel com formatação
        with pd.ExcelWriter(nome_arquivo, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='Propostas', index=False)
            
            # Ajusta largura das colunas
            worksheet = writer.sheets['Propostas']
            for column in worksheet.columns:
                max_length = 0
                column_letter = column[0].column_letter
                for cell in column:
                    try:
                        if len(str(cell.value)) > max_length:
                            max_length = len(cell.value)
                    except:
                        pass
                adjusted_width = min(max_length + 2, 50)
                worksheet.column_dimensions[column_letter].width = adjusted_width
                
        print(f"✅ Arquivo salvo: {os.path.abspath(nome_arquivo)}")
        print(f"📊 Total de registros: {len(self.dados_extraidos)}")
        
    def executar(self, limite_teste=None):
        """Executa todo o processo de extração"""
        try:
            self.configurar_driver()
            self.fazer_login()
            self.navegar_para_propostas()
            self.extrair_todas_linhas(limite=limite_teste)
            self.exportar_para_excel()
            
        except Exception as e:
            print(f"\n❌ Erro durante execução: {str(e)}")
            self.salvar_progresso()
            
        finally:
            if self.driver:
                print("\n🔒 Fechando navegador...")
                self.driver.quit()
                print("✅ Processo finalizado!")


def main():
    """Função principal"""
    print("=" * 60)
    print("  EXTRATOR AUTOMÁTICO - SISTEMA DE CONTRATAÇÃO")
    print("=" * 60)
    
    # Solicita credenciais
    print("\n🔐 Insira suas credenciais de login:")
    usuario = input("Usuário: ").strip()
    senha = input("Senha: ").strip()
    
    # Pergunta se quer fazer teste
    print("\n🧪 Deseja fazer um teste com poucas linhas primeiro?")
    teste = input("Digite 'S' para testar com 10 linhas ou 'N' para extrair tudo: ").strip().upper()
    
    limite = 10 if teste == 'S' else None
    
    # Cria instância e executa
    extrator = ExtratorContratacao(usuario, senha)
    extrator.executar(limite_teste=limite)
    
    print("\n" + "=" * 60)
    print("  EXTRAÇÃO CONCLUÍDA!")
    print("=" * 60)


if __name__ == "__main__":
    main()
