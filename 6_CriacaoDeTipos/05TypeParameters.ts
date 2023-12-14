// TYPE PARAMETERS - é um recurso do Generics
// Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que também é parâmetro
// Assim, conseguimos criar uma ligação entre o tipo genérico e sua chave

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave de ${key.toString()} está presente no objeto e tem o valor de ${String(
    obj[key],
  )}`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(server, 'teste')); - limita o segundo item ao que tem dentro do primeiro parâmetro
// RAM está dentro de SERVER(que é o objeto)
