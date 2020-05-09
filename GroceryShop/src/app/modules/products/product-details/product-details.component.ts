import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/modules/products/service/products.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  productDetail: Product;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService) {

  }

  ngOnInit() {
    this.listenParams();

  }
  /**
   * @description To Listen dynamic params change
   * @date 2020-05-10
   * @memberof ProductDetailsComponent
   */
  listenParams(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params) {
        this.productId = params['id'];
        this.getProductById(this.productId);
      }
    });
  }

  /**
   * @description To get Product by ID
   * @date 2020-05-10
   * @param {number} id
   * @memberof ProductDetailsComponent
   */
  getProductById(id: number): void {
    if (id) {
      this.productService.getProductById(id).subscribe((response: Product) => {
        if (response) {
          this.productDetail = response;
        }
      });
    }
  }

}
