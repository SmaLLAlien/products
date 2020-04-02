import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IProductModel} from '../../../core/models/product-model';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  id: string;
  allowEdit: false;
  product: Observable<IProductModel>;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.route.queryParams.subscribe(params => this.allowEdit = params.allowEdit);
    if (this.id) {
      this.product = this.productService.getProduct(this.id);
    }
  }

  sendProduct(product: IProductModel) {
    this.productService.sendProduct(product).subscribe(response => {
      this.router.navigate(['/products']);
    });
  }

  cancel() {
    this.allowEdit = false;
    this.router.navigate(['/products']);
  }

  delete(product: IProductModel) {
    this.allowEdit = false;
    this.productService.deleteProduct(product.id).subscribe(response => this.router.navigate(['/products']));
  }

  updateProduct(product: IProductModel) {
    this.allowEdit = false;
    this.productService.updateProduct(product).subscribe(request => this.router.navigate(['/products']));
  }

  goToProductsList() {
    this.router.navigate(['/products']);
  }

  goToEdit(product: Observable<IProductModel>) {
    product.subscribe(item => this.router.navigate(['/products', 'edit', `${item.id}`]));
  }
}
