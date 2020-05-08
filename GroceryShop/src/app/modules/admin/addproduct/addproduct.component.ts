import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Product } from '../products'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 
 
 
  

  constructor(private formBuilder: FormBuilder,private adminService:AdminService,private activedRoute: ActivatedRoute,
    private router: Router ) { }
 
  addProduct:FormGroup;
  public selectedFile:any=File;
  product:Product;
  imgURL: any;
  action: string;
  productsRecieved: Array<Product>;

  
  ngOnInit() {
    this.addProduct = this.formBuilder.group({
      productName:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],

  });
}

public onFileChanged(event) {
  console.log(event);
  this.selectedFile = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
  };

}
onUpload()
{
const formData=new FormData();
formData.append('value',JSON.stringify( this.addProduct.value));
formData.append('file',this.selectedFile);
this.adminService.addProduct(formData)
.subscribe(
  data=>{
    console.log(data);
    
  },
  error=>{
    console.log(error);
  }
);
}
}

