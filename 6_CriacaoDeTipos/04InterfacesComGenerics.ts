// Com interfaces podemos criar tipos complexos para objetos
// Adicionando Generics podemos deixá-los mais brandos
// Aceitam diferentes tipos em ocasiões diferentes

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car1 = MyObject<number, number, string>;
// Definiu os tipos das variáveis que eram genéricas

type Pen = MyObject<boolean, boolean, string>;

const myCar: Car1 = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };

const myPen: Pen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };

console.log(myCar);
console.log(myPen);
