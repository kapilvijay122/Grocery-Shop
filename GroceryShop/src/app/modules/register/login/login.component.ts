import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { LoginService } from '../service/modules/login/service/login.service';
import { User } from '../user'

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
  constructor(private formBuilder:FormBuilder,private router:Router, private loginService:LoginService) { }

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
   this.loginService.getUserByUserName(userName)
     .subscribe(
       data => 
       {
         if(data['password']=== password || data['password']=== password )
         {
           console.log("Password Matching");
           this.router.navigate(['/home']);
         }
         else if(data['password']==='admin1' || data['password']==='admin1')
         {
           this.invalidLogin = true;
           this.router.navigate(['/adminboard']);
         }
         console.log(data);
         this.submitted = true;
       },
       error => console.log(error));
 }

}


