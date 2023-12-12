//Generic Functions podem ter seu escopo reduzido por constraints
//Basicamente são limitados os tipos que podem ser utilizados no Generic, fazendo com que o escopo seja menos abrangente

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
