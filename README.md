🧪 Orange HRM — Automação de Testes E2E com Cypress
Projeto pessoal de automação de testes End-to-End desenvolvido para praticar e demonstrar habilidades em QA, utilizando o framework Cypress com JavaScript.
A aplicação testada é o OrangeHRM, um sistema open source de gestão de RH amplamente utilizado como ambiente de prática para testes.

🎯 Objetivos do Projeto

Aprender e aplicar conceitos de testes End-to-End na prática
Automatizar fluxos críticos de uma aplicação real
Organizar seletores e dados de teste de forma estruturada e reutilizável
Desenvolver boas práticas de escrita de testes com Cypress


🗂️ Estrutura do Projeto
first-test-E2E/
├── cypress/

│   ├── e2e/

│   │   └── orangeHRM.cy.js       # Arquivo principal com os testes

│   └── fixtures/

│       └── users/

│           └── userData.json      # Dados de usuário para os testes

├── cypress.config.js              # Configuração base do Cypress (baseUrl, etc.)

├── package.json

└── README.md

✅ Cenários Automatizados
1. Atualização de Informações Pessoais — Sucesso
Testa o fluxo completo de login e edição do perfil do usuário na seção "My Info":

Acesso à página de login
Autenticação com credenciais válidas
Validação do redirecionamento para o dashboard
Navegação para a tela de dados pessoais
Preenchimento e atualização de campos como: nome, sobrenome, apelido, cargo, número de documento, CNH, CPF/SSN/SIN e outros
Confirmação da mensagem de sucesso após salvar

2. Login com Credenciais Inválidas — Falha esperada
Testa o comportamento da aplicação ao tentar autenticar com dados incorretos:

Acesso à página de login
Tentativa de login com usuário/senha inválidos
Validação da mensagem de erro "Invalid credentials"


🛠️ Tecnologias Utilizadas
TecnologiaVersãoFinalidadeCypress^13.xFramework de testes E2EJavaScriptES6+Linguagem dos testesNode.js18+Ambiente de execução

⚙️ Como Rodar o Projeto
Pré-requisitos

Node.js instalado (versão 18 ou superior)
npm instalado

Instalação
bash# Clone o repositório
git clone https://github.com/ThiagoHAlonso/first-test-E2E.git

# Entre na pasta do projeto
cd first-test-E2E

# Instale as dependências
npm install
Executando os testes
bash# Abre a interface visual do Cypress (modo interativo)
npx cypress open

# Roda os testes no terminal (modo headless)
npx cypress run

📁 Dados de Teste
Os dados de usuário (credenciais válidas e inválidas) estão separados em um arquivo de fixture:
cypress/fixtures/users/userData.json
Essa abordagem evita deixar dados hardcoded nos testes e facilita a manutenção.

🧠 Aprendizados e Decisões Técnicas

Centralização de seletores: todos os seletores CSS utilizados nos testes estão agrupados no objeto selectorList, facilitando a manutenção em caso de mudanças na UI.
Uso de fixtures: os dados de teste são carregados via cy.fixture, separando dados de lógica de teste.
Uso de cy.pause(): utilizado durante o desenvolvimento para inspecionar o estado da aplicação em pontos críticos do fluxo.
Testes negativos: além do fluxo de sucesso, o projeto também cobre o cenário de falha de login, validando o comportamento esperado da aplicação.


👨‍💻 Autor
Thiago Henrique Alonso

GitHub: @ThiagoHAlonso



Projeto desenvolvido com fins de aprendizado e prática em automação de testes de software.
