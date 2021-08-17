import { DefaultDiscount } from './discount-strategy/default-discount';
import { NewDiscountStrategy } from './discount-strategy/new-discount-strategy';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';

const shoppingCar = new ECommerceShoppingCart();
shoppingCar.discountStrategy = new DefaultDiscount();
shoppingCar.discountStrategy = new NewDiscountStrategy();

shoppingCar.addProduct({ name: 'Produto 1', price: 50 });
shoppingCar.addProduct({ name: 'Produto 2', price: 100 });

console.log(shoppingCar);

console.log(shoppingCar.getSubTotal());
console.log(shoppingCar.getTotal());
