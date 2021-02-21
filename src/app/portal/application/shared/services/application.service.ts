import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  Application,
  ApplicationStatus
} from '../interfaces/application.interface';
import { APPLICATIONS_MOCK } from '../constants/applications.mock';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications = [...APPLICATIONS_MOCK];

  constructor() {}

  public getApplications(): Observable<Application[]> {
    return of(this.applications).pipe(delay(this.generateDelay()));

    // HTTP Example
    // return this.http.get<Product[]>(ENDPOINT)
    //   .pipe(
    //     map((data) => { ... })
    //   );
  }

  public getApplicationById(id: string): Observable<Application | undefined> {
    const application = APPLICATIONS_MOCK.find((item) => item.id === id);
    return of(application).pipe(delay(this.generateDelay()));
  }

  public updateApplication(application: Application): Observable<Application> {
    // HTTP Example
    // return this.http.put<Product>(ENDPOINT, product)
    //   .pipe(
    //     map((data) => { ... })
    //   );
    return of(application).pipe(delay(this.generateDelay()));
  }

  public createApplication(application: Application): Observable<Application> {
    // HTTP Example
    // return this.http.post<Product>(ENDPOINT, product)
    //   .pipe(
    //     map((data) => { ... })
    //   );
    const _application: Application = {
      id: this.generateUUID(),
      createdOn: new Date().getTime(),
      updatedOn: new Date().getTime(),
      status: this.generateStatus(),
      ...application
    };
    this.applications = [_application, ...this.applications];
    return of(application).pipe(delay(this.generateDelay()));
  }

  private generateDelay(): number {
    return Math.floor(Math.random() * (2000 - 300 + 1)) + 300;
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private generateStatus(): ApplicationStatus {
    return ['APPROVED', 'REJECTED', 'DRAFT', 'UNDER REVIEW'][
      Math.floor(Math.random() * 4)
    ] as ApplicationStatus;
  }
}
