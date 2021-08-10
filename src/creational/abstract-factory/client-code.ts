import { EnterpriseCreateCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateCustomerVehicleFactory();
const individualFactory = new IndividualCreateCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Prisma', 'Daniel');
const car2 = individualFactory.createVehicle('Celta', 'João');

car1.pickUp();
car2.pickUp();

// const car1 = enterpriseFactory.createCustomer('Globo');
// const car2 = individualFactory.createCustomer('João');
