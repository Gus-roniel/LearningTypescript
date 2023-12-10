//Cria uma referência única para um valor, ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes

let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

//ambas darão falsa, pois mesmo que eles tenham exatamente o mesmo valor e tipo, por ser symbol, terão valores diferentes
