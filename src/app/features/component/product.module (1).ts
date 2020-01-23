import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponentComponent } from './component/product-list-component.component';
import { ProductList } from './products.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponentComponent],
  providers: [ProductList],
  exports: [ProductListComponentComponent]
})
export class ProductModule {}