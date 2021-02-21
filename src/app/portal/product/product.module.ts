import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderModule } from '../../shared/components/loader/loader.module';

import { productRoutes } from './product.routes';

import { ProductListComponent } from './list/list.component';
import { ProductDetailsComponent } from './details/details.component';
import { ProductCreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(productRoutes),
    LoaderModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent
  ]
})
export class ProductModule {}
