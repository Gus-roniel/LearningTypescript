//Podemos definir quais tipos de propriedades um objeto possui

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("y coordinates: " + coord.y);
}

const objCoord = { x: 123, y: 321 };

passCoordinates(objCoord);
