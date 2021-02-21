import { Route } from '@angular/router';

import { SingleColumnCenteredLayoutComponent } from '../layout/single-column-centered/single-column-centered.component';
import { LoginComponent } from './login/login.component';

export const authRoutes: Route[] = [
  {
    path: '',
    component: SingleColumnCenteredLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
