# Integração Front-End com Back-End .NET

Projeto desenvolvido como atividade prática do Bootcamp de Desenvolvimento Back-End .NET.

A proposta da atividade é integrar uma aplicação Angular com uma API REST desenvolvida em .NET, utilizando Entity Framework Core e SQLite para persistência dos dados.

## Funcionalidades

A aplicação permite realizar o CRUD completo de produtos:

- Listar todos os produtos
- Buscar produto por ID
- Cadastrar novo produto
- Editar produto
- Remover produto

As alterações realizadas no front-end são enviadas para a API e persistidas no banco SQLite.

## Tecnologias utilizadas

### Back-End

- C#
- .NET
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger
- CORS

### Front-End

- Angular
- TypeScript
- HTML
- CSS
- HttpClient
- FormsModule

## Estrutura do projeto

```text
integracao-front-back-dotnet/
├── backend/
│   ├── Controllers/
│   ├── Data/
│   ├── Migrations/
│   ├── Models/
│   ├── Program.cs
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## Fluxo da aplicação

```text
Angular
   ↓
HttpClient
   ↓
API ASP.NET Core
   ↓
Entity Framework Core
   ↓
SQLite
```

O Angular envia requisições HTTP para a API, que utiliza o Entity Framework Core para realizar as operações no banco SQLite.

## Endpoints da API

```text
GET    /api/Produtos
GET    /api/Produtos/{id}
POST   /api/Produtos
PUT    /api/Produtos/{id}
DELETE /api/Produtos/{id}
```

## Como executar o projeto

### Back-End

Acesse a pasta:

```bash
cd backend
```

Restaure as dependências:

```bash
dotnet restore
```

Aplique as migrations para criar o banco SQLite:

```bash
dotnet ef database update
```

Execute a API:

```bash
dotnet run
```

Durante o desenvolvimento, a API ficou disponível em:

```text
http://localhost:5264
```

Swagger:

```text
http://localhost:5264/swagger
```

### Front-End

Em outro terminal, acesse:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o Angular:

```bash
ng serve
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

## Persistência de dados

O projeto utiliza SQLite como banco de dados.

O arquivo do banco não é versionado no repositório. Ele é criado localmente através das migrations do Entity Framework Core com:

```bash
dotnet ef database update
```

As operações de criação, edição e remoção foram validadas diretamente no banco utilizando o DBeaver.

## Validações

O model de produto possui validações com Data Annotations:

- Nome obrigatório
- Nome com no máximo 100 caracteres
- Preço entre 0.01 e 10000

## Integração Front-End e Back-End

O back-end possui configuração de CORS permitindo chamadas do Angular em:

```text
http://localhost:4200
```

O front-end consome a API através do `HttpClient`.

## Repositórios individuais

Back-End:

https://github.com/nayara-francelino/MinhaPrimeiraApi

Front-End:

https://github.com/nayara-francelino/produtos-front

## Autora

Nayara Francelino