import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
@Input()
product:Product;

@Output()
  bookDeletedEvent = new EventEmitter();
productId : number;
image : any;
Imagedata : any;
fileImage : string;

 
  constructor(private adminService: AdminService, private router: Router,private activateRoute:ActivatedRoute,private sanitizer:DomSanitizer) { }
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
     this.Imagedata =  'data:image/jpg;base64,'+ this.product["fileImage"];
     this.image = this.sanitizer.bypassSecurityTrustResourceUrl(this.Imagedata)

     console.log("The Product Value Is")
     console.log(this.product);
     console.log(this.product[productId]);
     
       console.log(data);
     },
     error => console.log('ERROR: ' + error));
 }

 deleteBook() {
  this.adminService.deleteProductByProductId(this.product.productId).subscribe(
    (product) => {
      this.bookDeletedEvent.emit();
      this.router.navigate(['/adminboard']);
      alert("Deleted succesfully")
    }
  );
}
  
 
}
