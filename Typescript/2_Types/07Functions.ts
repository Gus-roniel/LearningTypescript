/*
Podemos definir o tipo de cada parâmetro de uma função 
*/

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// soma('4', '5');  - nao é posível utilizar pois são strings

//É possível também definir o que espera que seja retornado da função

function greeting(name: string): string {
  return `Olá ${name}`;
  // return 5 - se não fizer a tipagem do retorno pode ser retornado um número
}

console.log(greeting("Gustavo"));
