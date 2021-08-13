import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  private mainDishBuilder: MainDishBuilder = new MainDishBuilder();
  private veganDishBuilder: VeganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.meal);
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().meal;
    console.log(meal2);
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().meal;
    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
