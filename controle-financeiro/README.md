# Controle Financeiro

Sistema de controle financeiro desenvolvido em **Node.js** para gerenciamento de receitas e despesas diretamente pelo terminal. O projeto utiliza armazenamento em arquivo JSON, análise estática de código com **ESLint** e avaliação da qualidade do código com **SonarQube Community Edition**.

## Objetivo

O sistema permite cadastrar, listar, remover e visualizar um resumo mensal das transações financeiras, demonstrando conceitos fundamentais de desenvolvimento com Node.js e boas práticas de qualidade de software.

## Funcionalidades

* Cadastro de receitas e despesas;
* Listagem de todas as transações;
* Remoção de lançamentos por ID;
* Cálculo automático do saldo;
* Resumo financeiro por mês;
* Persistência dos dados em arquivo JSON;
* Análise de qualidade do código com ESLint;
* Inspeção de métricas utilizando SonarQube.

## Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)
* ESLint 9
* SonarQube Community Edition
* SonarScanner for NPM
* fs (File System)
* path
* readline/promises

## Estrutura do projeto

```text
controle-financeiro/
├── data/
│   └── transactions.json
├── src/
│   ├── index.js
│   ├── storage.js
│   ├── transactions.js
│   ├── ui.js
│   └── utils.js
├── eslint.config.js
├── sonar-project.properties
├── package.json
└── README.md
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/WedleySilva/controle-financeiro.git
```

Entre na pasta do projeto:

```bash
cd controle-financeiro
```

Instale as dependências:

```bash
npm install
```

## Executando a aplicação

```bash
npm start
```

A aplicação será executada no terminal, apresentando um menu para gerenciamento das transações financeiras.

## Executando o ESLint

Verificar problemas de padronização:

```bash
npm run lint
```

Corrigir automaticamente os problemas encontrados:

```bash
npm run lint:fix
```

## Executando a análise no SonarQube

Instale o SonarScanner:

```bash
npm install -D @sonar/scan
```

Inicie o servidor do SonarQube e execute:

```bash
npx @sonar/scan -Dsonar.host.url=http://localhost:9000 -Dsonar.token=SEU_TOKEN
```

## Persistência dos dados

Os lançamentos são armazenados no arquivo:

```text
data/transactions.json
```

Caso o arquivo não exista, ele será criado automaticamente durante a execução do sistema.

## Exemplo de dados

```json
[
  {
    "id": "1",
    "description": "Salário",
    "amount": 3500,
    "category": "Renda",
    "date": "2026-07-02"
  },
  {
    "id": "2",
    "description": "Mercado",
    "amount": -250,
    "category": "Alimentação",
    "date": "2026-07-02"
  }
]
```

## Scripts disponíveis

| Comando            | Descrição                                                 |
| ------------------ | --------------------------------------------------------- |
| `npm start`        | Executa a aplicação                                       |
| `npm run lint`     | Analisa o código utilizando o ESLint                      |
| `npm run lint:fix` | Corrige automaticamente problemas encontrados pelo ESLint |

## Conceitos aplicados

* Modularização com ES Modules;
* Manipulação de arquivos JSON;
* Entrada de dados pelo terminal;
* Estruturas condicionais e de repetição;
* Funções reutilizáveis;
* Persistência de dados;
* Organização em múltiplos módulos;
* Análise estática de código com ESLint;
* Avaliação de qualidade utilizando SonarQube.

## Autor

**Wedley Silva Schmoeller**

Projeto desenvolvido para a disciplina de **Qualidade de Software** do curso de **Engenharia de Software** da **CATÓLICA SC – Centro Universitário**.
