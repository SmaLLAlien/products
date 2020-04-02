import { Injectable } from '@angular/core';
import {ProductApiService} from '../../core/services/product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiServ: ProductApiService) { }

  sendProduct(product) {
    return this.apiServ.addProduct(product);
  }
}
