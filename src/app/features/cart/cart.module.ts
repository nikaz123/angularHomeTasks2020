import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { CartListComponent } from './cart-list/cart-list.component';
//import { ListComponent } from './cart-list/list-component/list.component';
//import { ParentChildComponent } from './parent-child.component';

import {
  CartListComponent,
  ListComponent,
  CartComponent,
  CartService,
  ParentChildComponent
  
} from './cart';

@NgModule({
  declarations: [CartListComponent,
    ListComponent,
    CartComponent,
    CartService,
    ParentChildComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [ParentChildComponent]
})
export class CartModule { }
