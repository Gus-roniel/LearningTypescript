//Podemos determinar um nome para o tipo, escolhendo quais as propriedades e seus tipos
//mais utilizado quando se trabalha com objetos

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoord(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z} `);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoord(coordObj);
