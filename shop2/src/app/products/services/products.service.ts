import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product';
@Injectable()

export class ProductService {

  constructor() { }
  getProduct(): ProductModel {
    return new ProductModel('Lemon', 'Fruits', 8, 'Yellow');
  }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel('Apple', 'Fruits', 8, 'Red'),
      new ProductModel('Monitor', 'Computer', 5, 'Cool'),
      new ProductModel('CatFood', 'Animals', 1, 'Green'),
      new ProductModel('Pen', 'School', 1, 'Blue')
    ];
  }





}
