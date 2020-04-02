import { Injectable } from '@angular/core';
import {IProductModel} from '../models/product-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  urlKey = 'products.json';
  url = 'https://products-7d5ee.firebaseio.com/';


  constructor(private http: HttpClient) { }

  addProduct(product) {
    return this.http.post(`${this.url}/${this.urlKey}`, product);
  }
}
