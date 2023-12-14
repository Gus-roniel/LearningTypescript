// Basta adicionar uma ? para tornar o parâmetro opcional
// Colocar os opcionais por último

interface User1 {
  email: string;
  role?: string;
}

function showUserDetails(user: User1) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: User1 = { email: 'gustavo@teste.com', role: 'Admin' };
const u2: User1 = { email: 'roniel@teste.com' };

showUserDetails(u1);
showUserDetails(u2);
