import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private _state: ShoppingOrderState = new OrderPending(this);

  get state(): ShoppingOrderState {
    return this._state;
  }

  set state(state: ShoppingOrderState) {
    this._state = state;
  }

  get nameState(): string {
    return this._state.getName();
  }

  approvePayment(): void {
    this._state.approvePayment();
  }

  rejectPayment(): void {
    this._state.rejectPayment();
  }

  waitPayment(): void {
    this._state.waitPayment();
  }

  shipOrder(): void {
    this._state.shipOrder();
  }
}
