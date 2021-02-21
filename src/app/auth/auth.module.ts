import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';

import { authRoutes } from './auth.routes';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
    LayoutModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
