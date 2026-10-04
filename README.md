# Integração Front-End com Back-End .NET

Projeto desenvolvido como atividade prática do Bootcamp de Desenvolvimento Back-End .NET.

A proposta da atividade é integrar uma aplicação Angular com uma API REST desenvolvida em .NET, utilizando SQLite para persistência dos dados.

## Funcionalidades

A aplicação permite realizar o CRUD completo de produtos:

- Listar todos os produtos
- Buscar produto por ID
- Cadastrar novo produto
- Editar produto
- Remover produto

As alterações realizadas pelo front-end são persistidas no banco SQLite.

## Tecnologias utilizadas

### Back-End

- C#
- .NET
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

### Front-End

- Angular
- TypeScript
- HTML
- CSS
- HttpClient

## Estrutura do projeto

```text
integracao-front-back-dotnet/
├── backend/
│   └── API .NET e banco SQLite
│
├── frontend/
│   └── Aplicação Angular
│
└── README.md