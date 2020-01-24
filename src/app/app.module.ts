import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './features/first/first.component';
import { ProductComponent } from './features/product/product.component';
import { ProductListComponent } from './features/list/product-list/product-list.component';

import { ProductModule } from './features/list/product.module';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,

    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
