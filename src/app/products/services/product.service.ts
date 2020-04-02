import { Injectable } from '@angular/core';
import {ProductApiService} from '../../core/services/product-api.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProductModel} from '../../core/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ProductApiService) { }

  sendProduct(product): Observable<{name: string}> {
    return this.apiService.sendProduct(product);
  }

  getProducts(): Observable<IProductModel[]> {
     return this.apiService.getProducts().pipe(
      map(productObj => {
          const tempArr = [];
          const keys = Object.keys(productObj);
          keys.forEach(key => {
            tempArr.push({...productObj[key], id: key});
          });
          return tempArr;
      })
    );
  }

  getProduct(id: string): Observable<IProductModel> {
     return this.getProducts().pipe(
      map(productsArray => productsArray.filter(product => product.id === id)),
      map(productArray => productArray[0])
    );
  }

  deleteProduct(id: string): Observable<null> {
    return this.apiService.deleteProduct(id);
  }

  updateProduct(product: IProductModel): Observable<{[key: string]: IProductModel}> {
    const key = product.id;
    const fireBaseProduct = {};
    fireBaseProduct[key] = {...product};
    delete fireBaseProduct[key].id;
    return this.apiService.updateProduct(fireBaseProduct);
  }
}
