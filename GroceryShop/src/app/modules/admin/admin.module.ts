import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ DeleteProductsComponent, ViewProductsComponent, AdminboardComponent, AddproductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
