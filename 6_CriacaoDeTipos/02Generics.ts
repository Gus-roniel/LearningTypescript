// Utilizamos Generics quando uma função pode aceitar mais de um tipo
// Prática mais interessante do que o ANY ou UNION, que teriam um efeito semelhante

function showData<T>(arg: T): string {
  // pode ser usado qualquer nome, mas como convenção, prefere-se T ou U
  // Neste caso aceita qualquer argumento e converte para string a função
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData('Testando Generic'));
console.log(showData(true));
console.log(showData(['Teste', 123]));
