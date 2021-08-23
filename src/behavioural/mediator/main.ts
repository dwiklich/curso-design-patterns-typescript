// import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Caneta', price: 9.9 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Calça', price: 99.9 });
seller2.addProduct({ id: '4', name: 'Lápis', price: 1.9 });
seller2.addProduct({ id: '5', name: 'Lápis', price: 1.9 });

const seller3 = new Seller();

mediator.addSellers(seller1, seller2, seller3);

mediator.showProducts();

console.log('-------------------------');

// const buyer = new Buyer(mediator);
// buyer.viewProduct();
// buyer.buy('1');
// buyer.buy('3');
// buyer.viewProduct();

seller3.viewProduct();
seller3.buy('1');
seller3.buy('3');
seller3.viewProduct();
