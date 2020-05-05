import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ForgetComponent } from './forget/forget.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registeration', component: RegisterationComponent },
    { path: 'forget/:userName', component: ForgetComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
export const routingComponents = { LoginComponent,RegisterationComponent,ForgetComponent}
