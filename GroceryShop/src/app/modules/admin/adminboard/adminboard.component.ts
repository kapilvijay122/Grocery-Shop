import { Component, OnInit } from '@angular/core';
//import { Product } from '../products';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product'

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  products: Array<Product>;
  selectedProduct: Product;
  action: string;
  productsRecieved: Array<Product>;


  constructor(private adminService: AdminService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   
      
    this.adminService.getProducts().subscribe(
     
  
      response => {
        this.handleSuccessfulResponse(response)
      }
    
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
    this.refreshData();
  }
  refreshData() {
    this.adminService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {

        this.action = params['action'];
	    const id = params['productId'];
        if (id) {
          this.selectedProduct = this.products.find(product => {
            return product.productId === +id;
          });
        }
      }
    );
  }



  handleSuccessfulResponse(response) {
    // this.products = new Array<Product>();
    this.productsRecieved = response;
     for (const products of this.productsRecieved) {
     // var uints = new UInt8Array(fileImage);
      //var base64 = btoa(String.fromCharCode(null, uints));
      //var url = 'data:image/jpeg;base64,' + base64
     const productwithRetrievedImageField = new Product();
     productwithRetrievedImageField.productId = products.productId;
    productwithRetrievedImageField.productName = products.productName;
    productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + products.fileImage;
    productwithRetrievedImageField.price = products.price;
    productwithRetrievedImageField.quantity = products.quantity;
    productwithRetrievedImageField.fileImage=products.fileImage;
    this.products.push(productwithRetrievedImageField);
    console.log(productwithRetrievedImageField);
     }
  }

  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['/addproduct'], { queryParams: { action: 'add' } });
  }
  viewProduct(productId: number) 
  {
  
    this.router.navigate(['/productdetail',productId]);
  }

}