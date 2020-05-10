import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/modules/products/service/products.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  productQuantity = 1;
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
          if (this.productDetail.fileImage) {
            this.productDetail.imageUrl = "data:image/png;base64," + this.productDetail.fileImage;
          }
        }
      });
    }
  }

  increamentQuantity(): void {
    this.productQuantity = this.productQuantity + 1;
  }

  decreamentQuantity(): void {
    if (this.productQuantity > 1) {
      this.productQuantity = this.productQuantity - 1;
    }
  }

  addToCart():void{
    alert(`${this.productDetail.productName} added to Cart`);
  }

}
