import { Component, OnInit } from '@angular/core';

import { Cart } from './model/cart.model';
import { CartService } from './service/cart.service';


@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html'
  
})
export class ParentChildComponent implements OnInit {
carts: Array<Cart>;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.carts = this.cartService.getCarts();
  }

  onCompleteCart (cart: Cart): void {
    cart.buy = true;
  }


onAddCart(cart: Cart): void {
  this.carts.push(cart);
}
}
