# Controle Financeiro

## Descrição

O **Controle Financeiro** é uma aplicação desenvolvida em **Node.js** para gerenciamento simples de receitas e despesas diretamente pelo terminal.

Os dados são armazenados em um arquivo JSON local, permitindo que as informações permaneçam salvas entre as execuções do programa.

Este projeto foi desenvolvido com o objetivo de demonstrar conceitos fundamentais da linguagem JavaScript executada no ambiente Node.js, incluindo modularização, manipulação de arquivos, estruturas de repetição, condicionais e utilização do ESLint para análise estática do código.

---

## Funcionalidades

* Cadastrar receitas e despesas;
* Listar todos os lançamentos cadastrados;
* Remover lançamentos pelo ID;
* Exibir o saldo atual;
* Gerar resumo financeiro por mês;
* Armazenar os dados em arquivo JSON;
* Analisar e padronizar o código utilizando ESLint.

---

## Tecnologias utilizadas

* Node.js
* JavaScript (ES Modules)
* ESLint 9
* Biblioteca nativa `fs`
* Biblioteca nativa `path`
* Biblioteca nativa `readline/promises`

---

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
├── package.json
└── README.md
```

---

## Instalação

Clone o repositório ou copie os arquivos do projeto.

Instale as dependências:

```bash
npm install
```

---

## Executando o projeto

Para iniciar a aplicação:

```bash
npm start
```

A aplicação será executada no terminal e apresentará um menu semelhante ao seguinte:

```text
=== Controle Financeiro ===

1 - Novo lançamento
2 - Listar lançamentos
3 - Remover lançamento
4 - Resumo mensal
5 - Sair
```

---

## Executando o ESLint

Verificar problemas no código:

```bash
npm run lint
```

Corrigir automaticamente os problemas encontrados:

```bash
npm run lint:fix
```

---

## Persistência dos dados

Todas as transações são armazenadas no arquivo:

```text
data/transactions.json
```

Caso o arquivo não exista, ele será criado automaticamente durante a execução do sistema.

---

## Exemplo de registro

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

---

## Conceitos utilizados

O projeto contempla os seguintes conceitos de programação:

* Organização em módulos (`import` e `export`);
* Funções;
* Estruturas condicionais (`if` e `else`);
* Estruturas de repetição (`while` e `for...of`);
* Manipulação de arquivos JSON;
* Entrada de dados pelo usuário utilizando `readline`;
* Persistência de dados;
* Análise estática de código com ESLint.

---

## Autor

**Wedley Silva Schmoeller**

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento com Node.js.
