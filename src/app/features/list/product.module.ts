import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductList} from './products.service';

@NgModule({
  declarations: [ProductListComponent],
  providers: [ProductList],
  imports: [CommonModule],
  exports: [ProductListComponent]
})
export class ProductModule { }
