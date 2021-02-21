import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { FullNamePipeModule } from '../../shared/pipes/full-name.pipe.module';

import { applicationRoutes } from './application.routes';

import { ApplicationListComponent } from './list/list.component';
import { ApplicationCreateComponent } from './create/create.component';
import { ApplicationDetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(applicationRoutes),
    LoaderModule,
    FullNamePipeModule
  ],
  declarations: [
    ApplicationListComponent,
    ApplicationCreateComponent,
    ApplicationDetailsComponent
  ]
})
export class ApplicationModule {}
