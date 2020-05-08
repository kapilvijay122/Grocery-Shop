import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../service/modules/login/service/login.service';
import { User } from '../user';
import { MustMatch } from '../validation/must-match.validator';



@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

    registerForm:FormGroup;
    submitted = false;
     user : User =new User();
    constructor(private formBuilder: FormBuilder,private loginService: LoginService) { 
  
    }
  
    ngOnInit() {
      
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required,],
          lastName: ['', Validators.required],
          userName :['', [Validators.required,Validators.minLength(6)]],
          mobile : ['',Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          role:['',Validators.required]
      }, 
      {
        validator: MustMatch('password','confirmPassword')
      });
  }
    
    save() {
       // console.log(this.user);
      this.loginService.createUser(this.registerForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.submitted = true;
          },
          error => console.log(error));
      this.user = new User();
    }
      get firstName() {
          return this.registerForm.get('firstName');
      }
      get lastName() {
          return this.registerForm.get('lastName');
      }
      get userName() {
          return this.registerForm.get('userName');
      }
      get mobile() {
          return this.registerForm.get('mobile');
      }
      get email() {
          return this.registerForm.get('email');
      }
      get password() {
          return this.registerForm.get('password');
      }
      get confirmPassword() {
          return this.registerForm.get('confirmPassword');
      }
      get role()
          {
            return this.registerForm.get('role'); 
          }
    
     
      
      onSubmit() {

      this.save();
      this.submitted = true;
    
      if (this.registerForm.invalid) {
          return;
      }
  
  
      alert("Successfull Validation");
      console.log(this.registerForm.value);
  }
  
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}


