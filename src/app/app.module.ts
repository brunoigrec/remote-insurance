import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

const routingConfiguration: ExtraOptions = {
  // enableTracing: true,
  // useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  paramsInheritanceStrategy: 'always',
  relativeLinkResolution: 'corrected'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, routingConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
