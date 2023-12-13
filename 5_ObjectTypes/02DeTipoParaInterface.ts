// Interfaces são usadas para simplificar os parâmetros de objeto de funções
// Ao invés de passar parâmetros de um objeto longo para n funções, passamos apenas a interface
// Como convenção, utilizar primeira letra maiúscula

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
// Mais fácil de add mais objetos, caso seja necessitado

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$ ${product.price}`);
  if (product.isAvailable) {
    console.log('O produto está disponível');
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 49.9,
  isAvailable: true,
};

// Detalhe no uso da interface na função e na constante, garantindo que todos os parâmetros serão passados

showProductDetails(shirt);
showProductDetails({ name: 'tênis', price: 129.99, isAvailable: false });
