import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
console.log(order.nameState);
console.log('--------------');

order.approvePayment();
console.log(order.nameState);
console.log('--------------');

order.waitPayment();
console.log(order.nameState);
