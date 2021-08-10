import { BicycleFactory } from './factories/bicycle-factory';
import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';
import { Car } from './vehicle/car';

const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

const celta = new Car('Celta');
celta.pickUp('Joana');
celta.stop();

const bicicletaFactory = new BicycleFactory();
const bicicleta = bicicletaFactory.getVehicle('Bicicleta de Trilha');
bicicleta.pickUp('Joana');

const carFactory = new CarFactory();
const prisma = carFactory.getVehicle('Prisma');
prisma.pickUp('Mithel');

console.log('--------------------------');

const customerName = ['Daniel', 'Cibele', 'Joana', 'Clara'];

for (let i = 0; i < 10; i++) {
  const randomVehicle = randomCarAlgorithm();
  const name = customerName[randomNumbers(customerName.length)];
  randomVehicle.pickUp(name);
  randomVehicle.stop();
}
