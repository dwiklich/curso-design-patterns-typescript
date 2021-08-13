import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private _name = 'Camiseta';
  private _price = 49.9;

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }
}
