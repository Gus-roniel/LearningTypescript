// Em generic functions devemos utilizar parâmetros de tipos semelhantes, se não recebemos um erro
// Há a possibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial
// Isso faz com que a validação do TS aceite os tipos escolhidos

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));
// podemos colocar os itens aceitos sem precisar mudar a fórmula genérica
