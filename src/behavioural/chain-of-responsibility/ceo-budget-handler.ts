import { BaseBugetHundler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class CEOBudgetHandler extends BaseBugetHundler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento');
    budget.approved = true;
    return budget;
  }
}
