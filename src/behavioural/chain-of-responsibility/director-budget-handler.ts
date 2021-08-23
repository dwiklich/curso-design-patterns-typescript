import { BaseBugetHundler } from './base-budget-handler';
import { CEOBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBugetHundler {
  // protected nextHandler: BaseBugetHundler = new CEOBudgetHandler();

  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O Diretor tratou o orçamento');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
