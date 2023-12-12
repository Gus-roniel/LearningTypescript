//Usado para checar se existe uma propriedade no objeto
//Interessante pois as propriedades podem ser opcionais

class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog) {
  //tipagem está sendo feita conforme a classe, restringindo ainda mais
  if ("breed" in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`);
  } else {
    console.log(`O cachorro é um SRD`); //SRD = Sem raça definida
  }
}

showDogDetails(turca);
showDogDetails(bob);
