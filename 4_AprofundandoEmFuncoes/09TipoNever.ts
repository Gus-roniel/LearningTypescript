// NEVER é um retorno semelhanta ao VOID
// Utilizado quando a função não retorna nada, como o retorno de erros
// VOID às vezes executa processos no sistema, tendo um fim, mas não retornando um dado
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
//poderia ser usado também o VOID, que inclusive é mais comum

showErrorMessage('Algum erro');
