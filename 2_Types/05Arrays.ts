//Podemos especificar um array como um tipo também, pois geralmente eles possuem apenas um tipo de dado entre seus itens

//01 - Sintaxe mais utilizada
let numbers: number[] = [1, 2, 3];

//numbers.push('teste') - nao deixa, pois nao representa um tipo numerico

numbers.push(34);
console.log(numbers);
console.log("O quarto integrante do array é " + numbers[3]);

//02 - Outra forma de sintaxe para a criação de arrays
const nums: Array<number> = [4, 5, 6, 7]; //detalha na letra maiúscula no Array
console.log(nums);

nums.push(300);
console.log(nums);
