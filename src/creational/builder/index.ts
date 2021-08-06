// import { MealBox } from './classes/meal-box';
// import { Beans, Meat, Rice } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const rice = new Rice('Arroz', 20);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 15);
// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);
// console.log(mealBox);
// console.log('--------------');
// console.log(mealBox.getPrice());

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
