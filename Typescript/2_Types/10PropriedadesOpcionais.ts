function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);

showNumbers(1, 2);

//Validação de propriedades opcionais - parâmetros opcionais devem ser por último
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Gustavo", "Silva"));
console.log(advancedGreeting("Roniel"));
