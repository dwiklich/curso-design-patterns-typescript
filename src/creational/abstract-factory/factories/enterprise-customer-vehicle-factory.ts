import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { CreateCustomerVehicle } from './customer-vehicle-factory';

export class EnterpriseCreateCustomerVehicleFactory
  implements CreateCustomerVehicle
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    return new EnterpriseCar(vehicleName, this.createCustomer(customerName));
  }
}
