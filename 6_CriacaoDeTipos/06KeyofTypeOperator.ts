// Com o KEYOF TYPE OPERATOR podemos criar um novo tipo
// Aceita dados do tipo objeto, como object literals e arrays
// Pode criar o tipo baseado nas chaves do objeto passado como parâmetro

type character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof character;
// Representa todas as chaves daquele objeto

function showCharName(obj: character, name: C): string {
  return `${obj[name]}`;
}

const myChar: character = {
  name: 'Gustavo',
  age: 29,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, 'name'));
