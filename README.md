# **Hero Project CRA**

Projeto que traz uma lista de produtos e permite criar uma lista de desejos (wishlist). Criado com [Create React App](https://github.com/facebook/create-react-app) e [Express](http://expressjs.com/).

## **Stack**

Client
- [React](https://pt-br.reactjs.org/) & [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) são as bibliotecas de componentes;
- [Styled Components](https://styled-components.com/) para escrever CSS-in-JS;
- [PropTypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html) para typechecking;
- [Husky versão 4](https://github.com/typicode/husky) + [Lint Staged](https://github.com/okonet/lint-staged) para rodar Prettier, lint e testes unitários nos arquivos em stage ao executar `git commit`, buscando diminuir a quantidade de commits com erros;
- [eslint](https://eslint.org/) + [stylelint](https://stylelint.io/) + [prettier](https://prettier.io/) para manter um padrão e boas práticas na escrita do código;
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes unitários;
- [Cypress](https://www.cypress.io/) para testes end-to-end.

Server
- [Express](http://expressjs.com/) como frmework web para Node.js;
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently) para rodar a aplicação em React ao mesmo tempo;
- [Axios](https://axios-http.com/) para realizar as chamadas http.

## **Dependências**

Para o ambiente de desenvolvimento e testes você vai precisar de:

- [Node](https://nodejs.org/en/) - versão recomendada `14.16.0`;
- [Cypress](https://www.cypress.io/);

## **Rodando o projeto:**

Após clonar o repositório, instale as dependências:

- `yarn install` na pasta do projeto;
- `yarn install` entrando na pasta `client`, que é onde fica a aplicação React.

Visualizando o projeto em modo de desenvolvimento:

- `yarn dev` na pasta do projeto;
- Acessar http://localhost:3000/ para visualizar no navegador.

## **Testes:**

Rodando testes unitários:

- `yarn unit`

Visualizar a cobetura dos testes unitários:

- `yarn coverage`

Rodando testes End-to-End:

- `yarn e2e` (a aplicação deve estar em execução)

## **Linters:**

Rodando a verificação do **stylelint** em arquivos de estilo procurando más práticas:

- `yarn lint:css`

Rodando a verificação do **eslint** em arquivos `.js` procurando más práticas:

- `yarn lint`

Rodando o **eslint** para tentar corrigir pequenos problemas, como warnings:

- `yarn lint:fix`

Rodando a verificação do **prettier** em arquivos `.js` procurando inconsistências:

- `yarn prettier:check`

Rodando o **prettier** para tentar corrigir inconsistências no padrão de escrita de código:

- `yarn prettier:fix`

## **Deploy**

- `yarn build`

Este é o comando padrão de build do projeto que disponibiliza o React em modo de produção e arquivos otimizados.
Ao rodar o comando, o resultado é uma pasta `build` criada no diretório raíz ( `/` ).
