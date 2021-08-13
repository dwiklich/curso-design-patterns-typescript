import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  private readonly stamp = 10;
  private _name: string = this.product.name;

  get name(): string {
    return `${this._name} (Estampa)`;
  }

  get price(): number {
    return this.product.price + this.stamp;
  }
}
