import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSellers(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.mediator = this;
    });
  }

  buy(id: string): SellerProduct | void {
    // this.sellers.map((seller) => seller.sell(id));
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log('Aqui esta ', product.id, product.name, product.price);
        return product;
      }
    }
    console.log('Não foi encontrado o produto com o id ', id);
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
