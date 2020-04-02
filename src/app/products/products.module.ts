import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './containers/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, DetailProductComponent, ListProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
