// Nem sempre usamos todos os parâmetros de uma função
// Caso seja opcional, deve ser informado para o TS, e também deixar ele no fim da lista de parâmetros

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  }
  return `Olá ${name}, tudo bem?`;
}

console.log(modernGreeting("Gustavo", "Sr."));
console.log(modernGreeting("Niqueli"));
