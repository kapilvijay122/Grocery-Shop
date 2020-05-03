import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { GroceryService } from '../service/grocery.service';
import { User } from '../user';
import { MustMatch } from '../validation/password.validator';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;
    user : User =new User();
  constructor(private formBuilder: FormBuilder,private groceryService: GroceryService,private router:Router) { 

  }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required,],
        lastName: ['', Validators.required],
        userName :['', [Validators.required,Validators.minLength(6)]],
        mobile : ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, 
    {
       validator: MustMatch('password', 'confirmPassword')
    });
}

newUser(): void {
    this.submitted = true;
    this.user = new User();
  }

  save() {
     // console.log(this.user);
    this.groceryService.createUser(this.registerForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    //this.user = new User();
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


