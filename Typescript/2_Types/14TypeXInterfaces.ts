//Maioria das vezes podemos optar por qualquer um sem problemas
//Única diferença é que a interface pode ser alterada ao longo do código, já o alias não
//Se pretendemos mudar como o tipo se conforma, devemos escolher a interface

//INTERFACE

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = {
  name: "Gustavo",
  age: 29,
};

console.log(somePerson);

//TYPE
type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };
//Erro de identificador duplicado
