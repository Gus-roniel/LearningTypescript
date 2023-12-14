// Utilizado quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array
// Restringe a tipos que não devem ser utilizados, criando uma barreira de segurança a mais na variável

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;
// podem ser adicionados quantos itens quiserem, desde que siga o padrão do tipo do nome da variável e do tipo de valor

console.log(coords);
