import { ProductProtocol } from './product-protocol';

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  get name(): string {
    return this.product.name;
  }
  get price(): number {
    return this.product.price;
  }
}
