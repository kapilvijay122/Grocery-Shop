import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../service/modules/admin/service/admin.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  addForm:FormGroup;
  submitted = false;
  private selectedFile;
  imgURL: any;
  user : Product =new Product();
  constructor(private formBuilder: FormBuilder,private adminService: AdminService,private httpClient: HttpClient) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required,],
      number: ['', Validators.required],
      price:['',Validators.required]
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

get name() {
  return this.addForm.get('name');
}
get number() {
  return this.addForm.get('number');
}
get price() {
  return this.addForm.get('price');
}
saveFile(submitForm:FormGroup)
{
if(submitForm.valid)
{
  const user=submitForm.value;
  const formData =new FormData();
  formData.append('user',user);
  formData.append('file',this.selectedFile);
  this.adminService.createProduct(formData).subscribe((response) =>
  {
    console.log(response);
  });
}
else{
  console.log("Invalid");
}
}
}
