import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProductModel} from '../../../core/models/product-model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  products: Observable<IProductModel[]>;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts(): Observable<IProductModel[]> {
    return this.service.getProducts();
  }

  onEdit(product: IProductModel) {
    this.router.navigate(['/products', 'edit', `${product.id}`]);
  }

  openDetail(product: IProductModel) {
    this.router.navigate(['products', 'detail', `${product.id}`], {queryParams: {allowEdit: true}});
  }
}
