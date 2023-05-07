# Projeto CarShop API

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.

  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto apliquei os princípios de **Programação Orientada a Objetos (POO)** para a construção de uma **API** com `CRUD` para gerenciar uma concessionária de veículos. Foi feito utilizando o banco de dados `MongoDB` através do framework do `Mongoose`. Além disso, foram utilizadas as ferramentas `Docker` e `Docker Compose` para facilitar o processo de desenvolvimento e implantação da aplicação. A metodologia **TDD (Test Driven Development)** foi aplicada para garantir a qualidade do código e a robustez da aplicação.

  Nesta aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: `CRUD`.

  A aplicação foi desenvolvida com:

- `Node.js`
- `TypeScript`
- `Mongoose`
- `POO`
- `SOLID`
- `Arquitetura MSC`
- `docker`
- `docker-compose`
- `Express`;

  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. 

- `docker-compose up -d`;
- `docker exec -it car_shop bash`;
- `PORT=3001` ;
- `npm test`;

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install` na raiz do projeto;
- `npm run dev`;
- `PORT=3001` ;
- `npm test`;
