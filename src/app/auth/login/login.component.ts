import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginForm } from './login.interfaces';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public form: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public authenticate({ username, password }: LoginForm): void {
    console.log({ username, password });
    this.router.navigate(['/', 'portal']);
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }
}
