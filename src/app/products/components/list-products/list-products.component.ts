import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProductModel} from '../../../core/models/product-model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  _product: IProductModel;
  @Output() edited: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();
  @Output() detailed: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();
  @Input() set product(product: IProductModel) {
    this._product = product;
  }

  get product() {
    return this._product;
  }


  edit() {
    this.edited.emit(this.product);
  }

  openDetail() {
    this.detailed.emit(this.product);
  }
}
