import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicationService } from '../shared/services/application.service';

import { Application } from '../shared/interfaces/application.interface';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationCreateComponent {
  public form: FormGroup = this.createForm();
  public loading = true;
  public error = null;
  public countryList = [
    'France',
    'Germany',
    'Ireland',
    'Spain',
    'United Kingdom'
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {}

  public createApplication(application: Application): void {
    console.log(application);
    this.applicationService
      .createApplication(application)
      .subscribe(
        (application) => {
          this.router.navigate(['..'], { relativeTo: this.route });
        },
        (error) => (this.error = error)
      )
      .add(() => {
        this.cdr.markForCheck();
      });
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      applicant: this.formBuilder.group({
        firstName: [null],
        lastName: [null],
        dob: [null],
        address: this.formBuilder.group({
          line1: [null],
          line2: [null],
          city: [null],
          country: ['Ireland'],
          postcode: [null]
        })
      })
    });
  }
}
