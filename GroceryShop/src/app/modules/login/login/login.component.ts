import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
//import { GroceryService } from '../service/grocery.service';
//import { User } from '../user';
import {Router} from "@angular/router";
import { User } from "../user";
import { GroceryService } from "../service/groceryService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;
  user: User;
  invalidLogin: boolean = false;
  constructor(private formBuilder:FormBuilder,private groceryService: GroceryService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['',Validators.required]
  });
}
get userName() {
  return this.loginForm.get('userName');
}
get password() {
  return this.loginForm.get('password');
}
onSubmit() {
  this.submitted = true;
  this.save(this.loginForm.controls["userName"].value,this.loginForm.controls["password"].value);
  if (this.loginForm.invalid) {
      return;
  }
}

onReset() {
  this.submitted = false;
  this.loginForm.reset();
}


 save(userName:String,password:String) {
   this.groceryService.getUserByUserName(userName)
     .subscribe(
       data => 
       {
         if(data['password']===password || data['password']===password )
         {
           console.log("Password Matching");
           this.router.navigate(['/home']);

         }
         else 
         {
           console.log("Password DoesNot Matching");
           this.invalidLogin = true;
           this.router.navigate(['/login']);
           console.log("UserName Not Exists");
         }
         console.log(data);
        this.submitted = true;
       },
       error => console.log(error));
 }

}
 