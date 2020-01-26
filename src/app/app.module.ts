import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './features/first/first.component';
import { ProductComponent } from './features/product/product.component';

import {CartModule} from '.features/cart/cart.module'; 
import { ProductModule } from './features/list/product.module';
import { CartComponent } from './features/cart/cart-component/cart.component';
import { ParentChildComponent } from './features/cart/parent-child.component';
//import { CartModule } from './features/cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    CartComponent,
   

    ParentChildComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
