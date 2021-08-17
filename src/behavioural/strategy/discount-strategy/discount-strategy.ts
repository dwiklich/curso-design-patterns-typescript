import { ECommerceShoppingCart } from '../shopping-cart/e-commerce-shopping-cart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getSubTotal();
  }
}
