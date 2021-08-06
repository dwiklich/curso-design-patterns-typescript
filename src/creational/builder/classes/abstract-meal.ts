import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(protected name: string, protected price: number) {}

  getPrice(): number {
    return this.price;
  }
}
