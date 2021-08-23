import { OrderApproved } from './order-approved';
import { OrderPending } from './order-pending';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderReject';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.state = new OrderApproved(this.order);
    console.log(`${this.name}: Aprovando pagamento.`);
  }

  rejectPayment(): void {
    console.log('O pedido já esta no estado pagamento rejeitado.');
  }

  waitPayment(): void {
    this.order.state = new OrderPending(this.order);
    console.log(`${this.name}: Pendente pagamento.`);
  }

  shipOrder(): void {
    console.log('O pagamento foi rejeitado.');
  }
}
