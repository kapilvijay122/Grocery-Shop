import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from  './modules/login/login.module';
import { ProductsModule } from  './modules/products/products.module';
import { PageModule } from  './modules/page/page.module';
import { ShoppingCartModule } from  './modules/shopping-cart/shopping-cart.module';
import { HomeComponent } from './modules/page/home/home.component';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterationComponent } from './modules/login/registeration/registeration.component';
import { AboutUsComponent } from './modules/page/about-us/about-us.component';
import { ContactUsComponent } from './modules/page/contact-us/contact-us.component';
import { ProductDetailsComponent } from './modules/products/product-details/product-details.component';
import { CartDetailsComponent } from './modules/shopping-cart/cart-details/cart-details.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';

const routes: Routes  = [
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'registeration', component:RegisterationComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'contact-us', component:ContactUsComponent},
  { path:'product-list', component:ProductListComponent},
  { path:'cart-details', component:CartDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [HomeComponent, RegisterationComponent,
  //LoginComponent, ProductDetailsComponent,CartDetailsComponent,ContactUsComponent,AboutUsComponent];
