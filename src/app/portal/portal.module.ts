import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';

import { portalRoutes } from './portal.routes';

import { PortalComponent } from './portal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(portalRoutes),
    LayoutModule
  ],
  declarations: [PortalComponent]
})
export class PortalModule {}
