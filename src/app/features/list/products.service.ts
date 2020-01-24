import { Injectable } from '@angular/core';

// import { Product } from './product.module';
import { Product } from './product.model';

@Injectable()
export class ProductList {

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'Name', 'Description', 8);
  }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Apple', 'Apple', 5),
      new Product(2, 'Orange', 'Red', 10),
      new Product(3, 'Ananas', 'Yellow', 15),
      new Product(4, 'Pomelo', 'YelLow', 20)
    ];
  }

}