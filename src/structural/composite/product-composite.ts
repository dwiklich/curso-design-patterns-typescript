// COMPONENT
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  remove(product: ProductComponent): void {}
  // getChild(): ProductComponent[] {}
}

// LEAF
export class ProductLeaf extends ProductComponent {
  constructor(private _name: string, private _price: number) {
    super();
  }

  get name(): string {
    return this._name;
  }
  set name(newName: string) {
    this._name = newName;
  }

  get price(): number {
    return this._price;
  }
  set price(newPrice: number) {
    this._price = newPrice;
  }

  getPrice(): number {
    return this.price;
  }
}

// COMPOSITE
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
    // for (let i = 0; i < products.length; i++) {
    //   this.children.push(products[i]);
    // }
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
    // this.children.filter((produto) => {
    //   if (produto === product) {
    //     this.children.pop();
    //   }
    // });
  }
}

// CLIENT CODE
const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('tShirt', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
