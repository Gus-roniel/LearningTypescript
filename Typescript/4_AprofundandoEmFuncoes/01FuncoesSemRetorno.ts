//Podemos ter funções que não retornam valores, devendo utilizar o tipo VOID, dizendo ao TS que não temos um valor de retorno

function withoutReturn(): void {
  console.log("Esta função não tem um retorno");
  //return 1 - não pode ser utilizado numa tipagem VOID
}
