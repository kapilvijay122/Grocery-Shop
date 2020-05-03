import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  { path: 'registeration', component: RegisterationComponent },
  { path: 'login', component: LoginComponent },
  { path:'forget-password', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
export const routingComponents = [ RegisterationComponent,
  LoginComponent, ForgetPasswordComponent];