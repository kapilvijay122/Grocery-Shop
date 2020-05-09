import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Router } from '@angular/router';
import { ProductsService } from '../service/modules/products/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((response: Product[]) => {
      if (response) {
        this.products = response;
        this.products = this.products.map((product: Product) => {
          if (product.fileImage) {
            product.fileImage = 'data:image/png;base64,' + product.fileImage;
          }
          return product;
        })
      }
    })
  }
}




