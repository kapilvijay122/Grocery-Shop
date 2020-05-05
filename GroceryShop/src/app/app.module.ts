import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProductsModule } from  './modules/products/products.module';
import { PageModule } from './modules/page/page.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { RegisterModule } from './modules/register/register.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer/footer.component';
import { HeaderComponent } from './core/header/header/header.component';
import { AdminModule } from './modules/admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RegisterModule,
    ProductsModule,
    PageModule,
    ShoppingCartModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
