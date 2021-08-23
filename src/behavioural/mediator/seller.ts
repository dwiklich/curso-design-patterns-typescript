import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private _mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price),
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  set mediator(mediator: Mediator) {
    this._mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }

  viewProduct(): void {
    if (!this._mediator) return;
    this._mediator.showProducts();
  }

  buy(id: string): void {
    if (!this._mediator) return;
    this._mediator.buy(id);
  }
}
