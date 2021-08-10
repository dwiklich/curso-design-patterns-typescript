import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class EnterpriseCar implements Vehicle {
  constructor(private name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} (EnterpriseCar)`,
    );
  }
}
