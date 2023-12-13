//Recurso que permite criar um tipo e determinar o que ele verifica
//Maneira mais fácil de chamá-lo ao invés de criar expressões complexas com Union types, por exemplo

type ID = string | number;

function showID(id: ID) {
  console.log(`O ID é: ${id}`);
}

showID(1);
showID("200");
