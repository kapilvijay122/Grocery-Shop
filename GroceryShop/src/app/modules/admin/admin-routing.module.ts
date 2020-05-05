import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';


const routes: Routes = [
  { path:'add-products',component:AddProductsComponent},
  { path:'view-products',component:ViewProductsComponent},
  { path:'delete-products',component:DeleteProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
