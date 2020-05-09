import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  submitted: false;
  productId: number;
  product: Product;
  formBuilder: any;
  updateProduct:FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    this.updateProduct = this.formBuilder.group({
      productName:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],

  });

  this.productId = this.route.snapshot.params.productId;
    this.adminService.getProductByProductId(this.productId)
      .subscribe(data => {
        console.log(data);
        this.product = data;
      }, error => console.log(error));
  }
  updateProductDetail()
   {
    this.adminService.updateProduct(this.productId, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.list();
  }
  onSubmit() {
    this.updateProductDetail();
  }
  list()
  {
    this.router.navigate(['/productdetail']);
  }

}
