import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
 })
export class ProductComponent implements OnInit {

   constructor() { }
  onBuy(event) {
    alert('You have bought this goods');
    console.log (event);
  }
  ngOnInit() {
  }

}
