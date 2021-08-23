import { OrderPending } from './order-pending';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('O pedido já esta no estado pagamento aprovado.');
  }

  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
    console.log(`${this.name}: Rejeitando pagamento.`);
  }
  waitPayment(): void {
    this.order.state = new OrderPending(this.order);
    console.log(`${this.name}: Pendente pagamento.`);
  }

  shipOrder(): void {
    console.log('O pedido esta sendo enviado.');
  }
}
