// Utilizamos EXTENDING TYPES como uma herança para criar tipos mais complesxos por meio de uma interface
// Interface pode herdar as propriedades e tipos já definidos de outra
// Acontece por meio da instrução EXTENDS

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[];
}

const gustavo: Human = {
  name: 'Gustavo',
  age: 29,
};

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superPowers: ['Kamehameha', 'Genki Dama'],
};

console.log(gustavo);
console.log(goku.superPowers[1]);
