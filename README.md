# Boas vindas ao repositório do projeto de Carrinho de Compras!

## Técnologias usadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

----

## Habilidades

Nesse projeto, fui capaz de:

- Fazer requisições a uma API do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Implementar testes unitários.

---

## Rodando o Projeto:

<details>
  <summary>
    <code> Localmente </code>
  </summary>

- [x] Dê o fork no projeto e clone-o para sua maquina digitando o comando em seu terminal:
  
  ````bash
  git clone git@github.com:rafaelPermec/trybestore-shopping-cart.git
  ````
- [x] Entre com o comando em seu terminal, para entrar no diretório principal e instalar as dependências do projeto:
  ````bash
  cd trybestore-shopping-cart && npm install
    ````
- [x] Digite o comando abaixo em seu terminal e espere o browser abrir o projeto!
  ````bash
  npm start
  ````

</details>

<details>
  <summary>
    <code> Cenário de Testes </code>
  </summary>

### ESLint e Stylelint

Para garantir a qualidade do código, utilizei neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

---

### Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

---

### Cobertura de testes

Essa cobertura avalia a eficácia dos testes implementados de acordo com os requisitos.

Para executar e acompanhar a implementação da sua cobertura de testes, rode o comando abaixo:

```bash
npm run test:coverage
```
</details>
