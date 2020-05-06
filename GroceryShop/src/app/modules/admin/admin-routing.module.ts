import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  { path:'view-products',component:ViewProductsComponent},
  { path:'delete-products',component:DeleteProductsComponent },
  { path:'adminboard',component:AdminboardComponent },
  { path:'addproduct',component:AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
