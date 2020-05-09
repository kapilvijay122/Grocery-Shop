import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UpdateProductComponent } from './update-product/update-product.component';




const routes: Routes = [
  { path:'adminboard',component:AdminboardComponent },
  { path:'addproduct',component:AddproductComponent },
  { path:'productdetail/:productId',component:ProductdetailComponent },
  { path:'update-product/:productId',component:UpdateProductComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
