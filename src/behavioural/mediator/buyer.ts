import { Mediator } from './mediator';

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProduct(): void {
    this.mediator.showProducts();
  }

  buy(id: string): void {
    this.mediator.buy(id);
  }
}
