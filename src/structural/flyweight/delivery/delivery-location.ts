import { DeliveryFlyweightProtocol } from './delivery-flyweight-protocol';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweightProtocol {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log(`Entrega para ${name}`);
    console.log(`Em ${this.intrinsicState.street} ${this.intrinsicState.city}`);
    console.log(`Numero: ${number}`);
    console.log('-------------------------------------------------');
  }
}
