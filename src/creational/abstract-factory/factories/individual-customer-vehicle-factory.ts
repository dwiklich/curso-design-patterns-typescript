import { IndividualCustomer } from '../customer/individual-customer';
import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';
import { IndividualCar } from '../vehicle/individual-car';
import { CreateCustomerVehicle } from './customer-vehicle-factory';

export class IndividualCreateCustomerVehicleFactory
  implements CreateCustomerVehicle
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    return new IndividualCar(vehicleName, this.createCustomer(customerName));
  }
}
