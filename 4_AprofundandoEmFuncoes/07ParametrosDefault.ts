// São aqueles que já possuem um valor definido
// Se não passarmos para a função, será utilizado esse valor
// Aplicação em TS é igual em JS
// Devem estar sempre por último na lista de argumentos

function somaDefault(n: number, m = 10): number {
  //valor deve ser igualado naquele que pretende ser o default
  return n + m;
}

console.log(somaDefault(15));
console.log(somaDefault(15, 15));
