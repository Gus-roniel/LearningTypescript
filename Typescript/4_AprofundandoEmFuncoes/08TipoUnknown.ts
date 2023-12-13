// UNKNOWN - usado de forma semelhante ao any, aceita qualquer tipo de dado
// Diferença que ele não deixa que algo seja executado se não houver a validação do tipo, adicionando uma trava de segurança

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
  //caso não tenha a validação no number, ele não será executado
}

doSomething([1, 2, 3]);
doSomething(5);
