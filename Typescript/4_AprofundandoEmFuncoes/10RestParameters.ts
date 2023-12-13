// Para aplicá-los em parâmetros em TS, basta definir o tipo de dado com a sintaxe de Rest(...)

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}
//deixa ilimitado o número de parâmetros

console.log(sumAll(1, 2, 3, 4, 5));
