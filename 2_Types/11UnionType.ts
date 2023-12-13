//Melhor alternativa do que o ANY

function showBalance(balance: number | string) {
  console.log(`O saldo da conta é R$ ${balance}`);
}

showBalance(100);
showBalance("500");

//Outra sintaxe
const arr2: Array<number | string | boolean> = [1, "teste", false];

//Utilizando condicionais para validação, conforme o tipo de dado recebido, utilizando o TYPEOF
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));
