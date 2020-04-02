import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProductModel} from '../../../core/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  stub: IProductModel = {
    productName: 'name',
    productCode: 'code',
    starsRating: '2',
    tags: ['tag1', 'tag2', 'tag3'],
    description: 'some long description'
  };

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.sendProduct(this.stub).subscribe(x => console.log(x));
  }


}
