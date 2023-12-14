// Com o TYPEOF TYPE OPERATOR podemos criar um novo tipo
// Este tipo será baseado no tipo de algum dado
// É interessante para quando queremos criar uma variável com o mesmo tipo da outra, por exemplo

const userName: string = 'Matheus';

const userName2: typeof userName = 'João';

type x = typeof userName;

const userName3: x = 'Joaquim';
