import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
   })
export class FirstComponentComponent implements OnInit {
  name: string = 'Apple';
  description: string = 'Green';
  price: number = 5;
  isAvailable: boolean = true;
  prices = [5, 10, 15, 20];
  sales = ['50%', '70%', '80%'];
  Category: {
    Food,
    Sport,
    Children,
    Animals};
  constructor() {
  }

  ngOnInit() {
  }

}
