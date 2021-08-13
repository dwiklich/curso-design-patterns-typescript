import { ProductDecorator } from './product-decorator';

export class ProductCutomizationDecorator extends ProductDecorator {
  private readonly customization = 50;
  private _name: string = this.product.name;

  get name(): string {
    return `${this._name} (Customizada)`;
  }

  get price(): number {
    return this.product.price + this.customization;
  }
}
