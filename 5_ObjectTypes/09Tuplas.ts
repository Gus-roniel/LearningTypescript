// Um tipo de array, porém definimos a quantidade e o tipo de elementos
// Basicamente criamos um novo type, e nele inserimos um array com os tipos necessários
// Cada tipo conta como um elemento

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// ñ é possível, pois ultrapassa a quantidade de elementos dentro do array

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ['Gustavo', 29];
anotherUser[1] = 30; //possível fazer modificação, mantendo o mesmo tipo
console.log(anotherUser);
