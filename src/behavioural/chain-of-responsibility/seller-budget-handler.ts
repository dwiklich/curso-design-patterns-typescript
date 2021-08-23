import { BaseBugetHundler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';
import { ManagerBudgetHandler } from './manager-budget-handler';

export class SellerBudgetHandler extends BaseBugetHundler {
  // protected nextHandler: BaseBugetHundler = new ManagerBudgetHandler();

  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O Vendedor tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
