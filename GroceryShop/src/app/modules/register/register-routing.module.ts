import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ForgetComponent } from './forget/forget.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registeration', component: RegisterationComponent },
    { path: 'forget', component: ForgetComponent },
    { path: 'pagenotfound', component: PagenotfoundComponent },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
export const routingComponents = { LoginComponent,RegisterationComponent,ForgetComponent,PagenotfoundComponent}
