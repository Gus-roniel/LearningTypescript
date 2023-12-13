//Type Guard é basicamente uma validação com o uso do typeof, realizando bifurcações

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar esse cálculo");
  }
}

sum("4", "9");
sum(5, 14);
sum("5", 14);
