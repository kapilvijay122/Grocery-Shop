import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/page/home/home.component';
import { AboutUsComponent } from './modules/page/about-us/about-us.component';
import { ContactUsComponent } from './modules/page/contact-us/contact-us.component';
import { CartDetailsComponent } from './modules/shopping-cart/cart-details/cart-details.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { LoginComponent } from './modules/register/login/login.component';
import { RegisterationComponent } from './modules/register/registeration/registeration.component';
import { AdminboardComponent } from './modules/admin/adminboard/adminboard.component';
import { PagenotfoundComponent } from './modules/register/pagenotfound/pagenotfound.component';
import { AddproductComponent } from './modules/admin/addproduct/addproduct.component';


const routes: Routes  = [

  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'registeration', component:RegisterationComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'contact-us', component:ContactUsComponent},
  { path:'product-list', component:ProductListComponent},
  { path:'cart-details', component:CartDetailsComponent},
  { path:'adminboard', component:AdminboardComponent},
  { path:'addproduct', component:AddproductComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

