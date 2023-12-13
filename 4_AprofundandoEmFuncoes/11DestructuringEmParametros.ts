// Precisamos apenas determinar o tipo de dado que será desestruturado, onde o TS valida o Destructuring

function showProductDetails1({ name, price }: { name: string; price: number }): string {
  return `O nome do produto é ${name} e ele custa ${price}`;
  //usado para sintaxe ficar mais limpa. Caso nao seja desestruturado, teria que fazer (product.name-product.price)
}

const shirt1 = { name: 'Camisa', price: 49.99 };

console.log(showProductDetails(shirt));
