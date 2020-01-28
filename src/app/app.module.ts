import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';

import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';



import { AppComponent } from './app.component';
import { FirstComponent } from './features/first/first.component';
import { ProductComponent } from './features/product/product.component';

import {CartModule} from './features/cart/cart.module'; 
import { ProductModule } from './features/list/product.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
     ProductComponent
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
