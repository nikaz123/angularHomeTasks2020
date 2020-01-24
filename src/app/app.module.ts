import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './features/first/first.component';
import { ProductComponent } from './features/product/product.component';


import { ProductModule } from './features/list/product.module';
import { CartComponent } from './features/cart/cart-component/cart.component';

import { CartModule } from './features/cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,

    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
