import { Route } from '@angular/router';

import { ApplicationListComponent } from './list/list.component';
import { ApplicationCreateComponent } from './create/create.component';
import { ApplicationDetailsComponent } from './details/details.component';

export const applicationRoutes: Route[] = [
  {
    path: '',
    component: ApplicationListComponent
  },
  {
    path: 'create',
    component: ApplicationCreateComponent
  },
  {
    path: ':id',
    component: ApplicationDetailsComponent
  }
];
