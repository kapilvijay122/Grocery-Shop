import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Router } from '@angular/router';
import { ProductsService } from '../service/modules/products/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<Product>;
  productRecieved: Array<Product>;
  cartProducts: any;
  constructor() { }

  ngOnInit() {
  }
}

  


