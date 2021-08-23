import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.state = new OrderApproved(this.order);
    console.log(`${this.name}: Aprovando pagamento.`);
  }

  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
    console.log(`${this.name}: Rejeitando pagamento.`);
  }

  waitPayment(): void {
    console.log('O pedido já esta no estado pagamento pendente.');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido com pagamento pendente.');
  }
}
