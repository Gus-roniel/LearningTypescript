// Super restrito, pois limita qntd de itens, qual o tipo de cada um e também não são modificáveis

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
