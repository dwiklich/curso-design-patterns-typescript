import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.meal);
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().meal;
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().meal;
console.log(veganMeal);
console.log(veganMeal.getPrice());
