import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UpdateProductComponent } from './update-product/update-product.component';





@NgModule({
  declarations: [AdminboardComponent, AddproductComponent, ProductdetailComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
