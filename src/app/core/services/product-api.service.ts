import { Injectable } from '@angular/core';
import {IProductModel} from '../models/product-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  urlKey = 'products.json';
  url = 'https://products-7d5ee.firebaseio.com/';


  constructor(private http: HttpClient) { }

  sendProduct(product): Observable<{name: string}> {
    return this.http.post<{name: string}>(`${this.url}/${this.urlKey}`, product);
  }

  getProducts(): Observable<{[keys: string]: IProductModel}> {
    return this.http.get<{[keys: string]: IProductModel}>(`${this.url}/${this.urlKey}`);
  }

  deleteProduct(id: string): Observable<null> {
    return this.http.delete<null>(`https://products-7d5ee.firebaseio.com/products/${id}.json`);
  }

  updateProduct(product: {[key: string]: IProductModel}): Observable<{[key: string]: IProductModel}> {
    const key = Object.keys(product)[0];
    return this.http.patch<{[key: string]: IProductModel}>(`https://products-7d5ee.firebaseio.com/products/${key}.json`, product[key]);
  }
}
