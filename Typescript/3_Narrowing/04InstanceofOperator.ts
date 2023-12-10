//Usado para checar se um dado pertence a determinada classe, podendo ser usado para nossas próprias classes criadas

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const paul = new User("Paul");
