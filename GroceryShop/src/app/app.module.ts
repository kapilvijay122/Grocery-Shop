import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginModule } from  './modules/login/login.module';
import { ProductsModule } from  './modules/products/products.module';
import { PageModule } from './modules/page/page.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProductsModule,
    PageModule,
    ShoppingCartModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
