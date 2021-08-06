import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Meat, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  get meal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Soja', 10);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    throw new Error('Method not implemented.');
  }
  makeDessert(): this {
    throw new Error('Method not implemented.');
  }
}
