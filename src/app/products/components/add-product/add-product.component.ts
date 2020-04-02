import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProductModel} from '../../../core/models/product-model';
import {starsRange} from '../../../core/validators/stars-range.validator';
import {priceNumber} from '../../../core/validators/price-validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent implements OnInit, OnChanges {

  @Input() product: IProductModel;
  @Output() addedProduct: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();
  @Output() canceled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleted: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();
  @Output() edited: EventEmitter<IProductModel> = new EventEmitter<IProductModel>();

  productForm: FormGroup;


  get productName() {
    return this.productForm.get('productName');
  }

  get productCode() {
    return this.productForm.get('productCode');
  }

  get starsRating() {
    return this.productForm.get('starsRating');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  get tags() {
    return this.productForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this.formInit();
      this.productForm.patchValue(this.product);
    }
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productCode: ['', [Validators.required, Validators.minLength(5)]],
      starsRating: ['', [Validators.required, starsRange(1, 5)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, priceNumber()]],
      tags: this.fb.array([])
    });
  }

  addTag() {
    this.tags.push(this.fb.control([''], [Validators.required]));
  }

  save() {
    this.addedProduct.emit(this.productForm.value);
  }

  cancel() {
    this.canceled.emit(true);
  }

  delete() {
    this.deleted.emit(this.product);
  }

  edit() {
    this.edited.emit({...this.productForm.value, id: this.product.id});
  }
}
