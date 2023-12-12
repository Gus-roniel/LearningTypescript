//Usado quando o tipo de retorno é relacionado ao tipo de argumento
//Ex: um item de um array pode ser string, boolean ou number
//Normalmente são utilizados letras como T ou U para definir os generics (convenção do uso do TS)

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

//Pode receber qualquer tipo de dado, desde que seja um array

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  { name: "Gustavo" },
  { age: 29, job: "Programador" }
);

console.log(newObject);
