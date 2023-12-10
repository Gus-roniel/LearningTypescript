//Recurso que permite restringir os valores como tipos, muito utilizado com Union Types

let test: "Testando";

function showDirection(directions: "left" | "right" | "center") {
  console.log(`A direção é ${directions}`);
}

showDirection("left");
