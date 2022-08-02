import { Component, OnInit } from '@angular/core';
import { FormLoginModel } from './models/build-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends FormLoginModel {
  public loading: boolean
  public showForm: boolean = true
  constructor() {
    super()
  }

  public authentication(): void {}

  public closeForm(): void {
    this.showForm = false
  }
}
