import { CustomerBudget } from './customer-budget';

export abstract class BaseBugetHundler {
  protected nextHandler: BaseBugetHundler | null = null;

  setNextHandler(handler: BaseBugetHundler): BaseBugetHundler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}
