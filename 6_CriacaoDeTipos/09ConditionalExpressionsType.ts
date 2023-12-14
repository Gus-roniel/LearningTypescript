// O tipo por condição permite criar um novo tipo com base em um if/else
// Não aceita expressões tão amplas
// Utilizamos a sintaxe de IF TERNARIO

interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;
//Se B extende de A será um número, senão será uma string

const someVar: myType = 5;

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
//será boolean, pois Teste não extende showNumber
