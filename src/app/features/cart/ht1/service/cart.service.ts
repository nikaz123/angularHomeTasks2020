import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';


@Injectable()
export class CartService {
  constructor() { }

  getCart(): Cart {
    return new Cart(1, 'Lemon', 'Blue', 8);
  }

  getCarts(): Array<Cart> {
    return [
      new Cart(1, 'Apple', 'Green', 5),
      new Cart(2, 'Orange', 'Red', 10),
      new Cart(3, 'Ananas', 'Yellow', 15),
      new Cart(4, 'Pomelo', 'YelLow', 20)
    ];
  }

}