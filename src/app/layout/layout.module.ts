import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoModule } from '../shared/components/logo/logo.module';

import { SingleColumnCenteredLayoutComponent } from './single-column-centered/single-column-centered.component';
import { PortalLayoutComponent } from './portal/portal.component';

@NgModule({
  imports: [CommonModule, RouterModule, LogoModule],
  declarations: [SingleColumnCenteredLayoutComponent, PortalLayoutComponent],
  exports: [
    RouterModule,
    SingleColumnCenteredLayoutComponent,
    PortalLayoutComponent
  ]
})
export class LayoutModule {}
