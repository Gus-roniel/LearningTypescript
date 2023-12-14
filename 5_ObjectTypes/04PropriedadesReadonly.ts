// READONLY podem ser alteradas apenas uma vez, na criação do novo dado
// Forma de criar um valor constante em um objeto
// Podemos adicionar as interfaces

interface Car {
  brand: string;
  readonly wheels: 4;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
};
console.log(fusca);

// fusca.wheels = 5 (ñ é possível alterar depois de definido, por ser uma variável readonly)
