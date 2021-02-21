cypress-cucumber-preprocessor

### Instalação:

`npm install -D cypress-cucumber-preprocessor`

### Configuração do Cypress:

Adicione o trecho abaixo no arquivo de plugins: 

`cypress/plugins/index.js`

```js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
``` 

Adicione o suporte a arquivos de feature em sua configuração do Cypress:

`cypress.json`

{
  "testFiles": "**/*.feature"  
}

### Configuração:
Por favor, faça uso de cosmiconfig para criar uma configuração para o plugin, por exemplo, adicionando a seção abaixo ao seu package.json:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true 
}
``` 

*Essa configução se tornara padrão futuramente.* 

## Como organizar os testes

### Arquivos de feature independentes

Adicione seu arquivo de feature na pasta `cypress/integration`
Exemplo: `cypress/integration/Calculadora.feature`

```gherkin
  Feature: Calculadora

  Como usuario, desejo utilizar a Calculadora
  Para que possa conferir minhas contas

  Scenario: Calcular soma de valores
    Dado que eu acesso a calculadora
    E desejo realizar uma soma
    Quando informar os valores
    E finalizar a conta
    Entao devo obter o resultado

```
*Neste caso, vamos substituir pelos termos em inglês: Given, When, Then, And* 
