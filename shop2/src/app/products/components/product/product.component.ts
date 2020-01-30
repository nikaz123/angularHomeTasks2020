import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  @Input()
  public  product: ProductModel;
  @Input()
  public  count: number;
  @Output()
  public  buyProduct: EventEmitter<ProductModel> = new EventEmitter();

  public onBuy(): void {
    
    this.buyProduct.emit(this.product);
  }

}
