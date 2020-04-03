import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IProductModel} from '../../../core/models/product-model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit, OnChanges {
  _product: IProductModel;
  @Input() product: IProductModel;
  @Output() goBack: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() goEdit: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this._product = changes.product.currentValue;
    }
  }

  ngOnInit(): void {
  }

  back() {
    this.goBack.emit(true);
  }

  edit() {
    this.goEdit.emit(this._product);
  }
}
