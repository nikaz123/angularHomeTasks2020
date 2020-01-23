import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
 })
export class ProductComponentComponent implements OnInit {

   constructor() { }
  onBuy(event) {
    alert('You have bought this goods');
    console.log (event);
  }
  ngOnInit() {
  }

}
