import { Component, EventEmitter, Output } from '@angular/core';

import { Cart } from '../model/cart.model';
@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
@Output()
addCart:  EventEmitter<Cart> = new EventEmitter<Cart>();
 
onAddCart(newCart: {
name: string;
description: string;
price: number;
}): void {
  const cart = new Cart(
    null,
    newCart.name,
    newCart.description,
    newCart.price
  );
  this.addCart.emit(cart);
}
}
