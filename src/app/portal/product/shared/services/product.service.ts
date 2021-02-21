import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Product } from '../interfaces/product.interface';
import { PRODUCTS_MOCK } from '../constants/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of(PRODUCTS_MOCK).pipe(delay(this.generateDelay()));

    // HTTP Example
    // return this.http.get<Product[]>(ENDPOINT)
    //   .pipe(
    //     map((data) => { ... })
    //   );
  }

  public getProductById(id: string): Observable<Product | undefined> {
    const product = PRODUCTS_MOCK.find((item) => item.id === id);
    return of(product).pipe(delay(this.generateDelay()));
  }

  public updateProduct(product: Product): Observable<Product> {
    // HTTP Example
    // return this.http.put<Product>(ENDPOINT, product)
    //   .pipe(
    //     map((data) => { ... })
    //   );
    return of(product).pipe(delay(this.generateDelay()));
  }

  public createProduct(product: Product): Observable<Product> {
    // HTTP Example
    // return this.http.post<Product>(ENDPOINT, product)
    //   .pipe(
    //     map((data) => { ... })
    //   );
    return of(product).pipe(delay(this.generateDelay()));
  }

  private generateDelay(): number {
    return Math.floor(Math.random() * (2000 - 300 + 1)) + 300;
  }
}
