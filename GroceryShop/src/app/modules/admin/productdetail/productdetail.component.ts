import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { Observable } from 'rxjs';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsRoutingModule } from '../../products/products-routing.module';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

product:Product;
productId : number;

 
  constructor(private adminService: AdminService, private router: Router,private activateRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
        const id = parseInt(params.get('productId'));
        this.productId = id;
       
        this.viewProduct(this.productId)
        console.log(this.productId);
            });

  }
  viewProduct(productId:number) {
    this.adminService.getProductByProductId(productId)
   .subscribe(
     data => {
     this.product=data;
     console.log("The Product Value Is")
     console.log(this.product);
     console.log(this.product[productId]);
     
       console.log(data);
     },
     error => console.log('ERROR: ' + error));
 }

}
