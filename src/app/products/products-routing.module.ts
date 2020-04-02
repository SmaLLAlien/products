import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './containers/products/products.component';
import {DetailProductComponent} from './components/detail-product/detail-product.component';
import {ProductComponent} from './containers/product/product.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'add', component: ProductComponent},
  {path: 'detail/:id', component: ProductComponent},
  {path: 'edit/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
