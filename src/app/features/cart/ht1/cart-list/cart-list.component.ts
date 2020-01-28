import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
@Input()
carts: Array<Cart>;

@Output()
completeCart:  EventEmitter<Cart> = new EventEmitter();
  
onCompleteCart(cart: Cart): void {
  this.completeCart.emit(cart);
}


}
