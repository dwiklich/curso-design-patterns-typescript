import { DiscountStrategy } from '../discount-strategy/discount-strategy';
import { ECommerceProductProtocol } from './e-commerce-product-protocol';

export class ECommerceShoppingCart {
  private readonly _products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductProtocol[]): void {
    this.products = [...products];
    // products.forEach((product) => this._products.push(product));
  }
  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  set discountStrategy(discountStrategy: DiscountStrategy) {
    // this._discountStrategy = Object.create(discountStrategy);
    this._discountStrategy = discountStrategy;
  }

  get products(): ECommerceProductProtocol[] {
    return this._products;
  }

  set products(products: ECommerceProductProtocol[]) {
    products.forEach((product) => this._products.push(product));
  }

  getSubTotal(): number {
    return this._products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotal(): number {
    return this._discountStrategy.getDiscount(this);
  }
}
