const readline = require('readline');

// Cria uma interface de leitura de terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array que irá armazenar as propriedades CSS inseridas pelo usuário
let cssProperties = [];

// Função para ordenar e imprimir a lista de propriedades CSS
function printSortedProperties() {
  cssProperties.sort();
  console.log(cssProperties.join('\n'));
}

// Função para receber as propriedades CSS do usuário
function askProperties() {
  rl.question('Digite uma propriedade CSS ou SAIR para finalizar:\n', (answer) => {
    if (answer.toUpperCase() === 'SAIR') {
      printSortedProperties();
      rl.close();
    } else {
      cssProperties.push(answer);
      askProperties();
    }
  });
}

// Inicia o processo de perguntar as propriedades CSS ao usuário
askProperties();
