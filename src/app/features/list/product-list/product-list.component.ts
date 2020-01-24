import { Component, OnInit } from '@angular/core';
import { ProductList } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  item: Product;
  items: Array<Product>;


  constructor(
    private productsService: ProductList
  ) { }

  ngOnInit() {
    this.item = this.productsService.getProduct();
    this.items = this.productsService.getProducts();
  }

}
