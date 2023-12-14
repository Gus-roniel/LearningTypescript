// Utilizado para criar tipos mais complexos a partir de duas interfaces
// Podemos concatenar os tipos com &

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
};

console.log(arnold);

console.log(arnold.caliber);
