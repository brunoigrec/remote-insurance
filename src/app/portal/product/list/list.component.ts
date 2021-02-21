import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ProductService } from '../shared/services/product.service';

import { Product } from '../shared/interfaces/product.interface';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  public loading = true;
  public error = null;
  public products: Product[] | undefined = undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService
      .getProducts()
      .subscribe(
        (products) => (this.products = products),
        (error) => (this.error = error)
      )
      .add(() => {
        this.loading = false;
        this.cdr.markForCheck();
      });
  }
}
