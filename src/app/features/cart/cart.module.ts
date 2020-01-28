import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './ht1/cart-list/cart-list.component';
import { ListComponent } from './ht1/cart-list/list-component/list.component';
import { ParentChildComponent } from './ht1/parent-child.component';

import {
  
  CartComponent,
  CartService  
  
} from '../cart/ht1';

@NgModule({
  declarations: [CartListComponent,
    ListComponent,
    CartComponent,
   // CartService,
    ParentChildComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [ParentChildComponent]
})
export class CartModule { }
