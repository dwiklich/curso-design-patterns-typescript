import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  get children(): MealCompositeProtocol[] {
    return this._children;
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }

  getPrice(): number {
    return this.children.reduce(
      (accumulator: number, meal: MealCompositeProtocol): number => {
        return accumulator + meal.getPrice();
      },
      0,
    );
  }
}
