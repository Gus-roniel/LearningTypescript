// ReadOnlyArray é um tipo para array que deixa os itens como readonly
// Podemos aplicar um tipo para os itens do array, além desta propriedade especial
// A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo

let myArray: ReadonlyArray<string> = ['macã', 'laranja', 'banana'];
//deve ser colocado <>

console.log(myArray);

myArray.forEach((item) => {
  console.log('Fruta: ' + item);
});
// forEach faz o que quiser com o array, sem modificá-lo

myArray = myArray.map((item) => {
  return `Fruta colocada: ${item}`;
});
// map modifica o array (um método)

console.log(myArray);
