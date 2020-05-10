import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
