// CONSTRAINTS nos ajudam a limitar os tipos aceitos em generics
// Filtram os tipos aceitos, adicionando organização quando queremos aproveitar a liberdade dos Generics

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
// Pode colocar quantos tipos quiserem, mas requer o tipo colocado pelo EXTENDS

console.log(showProductName(myObj));
