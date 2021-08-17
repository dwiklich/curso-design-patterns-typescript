import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Daniel', '06', 'Jose Passador', 'Mauá');
deliveryContext(factory, 'Cibele', '06', 'Jose Passador', 'Mauá');
deliveryContext(factory, 'Helena', '25', 'Jose Passador', 'Mauá');
deliveryContext(factory, 'Mithel', '285', 'Donatelo Forte', 'Mauá');

console.log('--------------');

console.log(factory.location);
