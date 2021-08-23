import { BaseBugetHundler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';

export class ManagerBudgetHandler extends BaseBugetHundler {
  // protected nextHandler: BaseBugetHundler = new DirectorBudgetHandler();

  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O Gerente tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
