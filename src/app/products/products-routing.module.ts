import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './containers/products/products.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {DetailProductComponent} from './components/detail-product/detail-product.component';
import {ListProductsComponent} from './components/list-products/list-products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: 'add', component: AddProductComponent},
      {path: 'detail', component: DetailProductComponent},
      {path: 'product-list', component: ListProductsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
