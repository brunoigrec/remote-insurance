import { Route } from '@angular/router';

import { ProductCreateComponent } from './create/create.component';
import { ProductDetailsComponent } from './details/details.component';
import { ProductListComponent } from './list/list.component';

export const productRoutes: Route[] = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  }
];
