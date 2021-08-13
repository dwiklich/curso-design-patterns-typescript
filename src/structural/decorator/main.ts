import { ProductDecorator } from './product/product-decorator';
import { TShirt } from './product/t-shirt';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCutomizationDecorator } from './product/product-customization-decorator';

const tShirt = new TShirt();
const tShirtDecorator = new ProductStampDecorator(tShirt);
const tShirtDecorator2 = new ProductStampDecorator(tShirtDecorator);
const tShirtCutomization = new ProductCutomizationDecorator(tShirtDecorator2);
console.log(tShirt.name, tShirt.price);
console.log(tShirtDecorator.name, tShirtDecorator.price);
console.log(tShirtDecorator2.name, tShirtDecorator2.price);
console.log(tShirtCutomization.name, tShirtCutomization.price);
