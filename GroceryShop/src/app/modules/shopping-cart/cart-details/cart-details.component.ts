import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.less']
})
export class CartDetailsComponent implements OnInit {

  cartItems = [];
  constructor() { }

  ngOnInit() {
  }

}
