import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ApplicationService } from '../shared/services/application.service';

import { Application } from '../shared/interfaces/application.interface';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationListComponent implements OnInit {
  public loading = true;
  public error = null;
  public applications: Application[] | undefined = undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  private loadApplications(): void {
    this.applicationService
      .getApplications()
      .subscribe(
        (applications) => (this.applications = applications),
        (error) => (this.error = error)
      )
      .add(() => {
        this.loading = false;
        this.cdr.markForCheck();
      });
  }
}
