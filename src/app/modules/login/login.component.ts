import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormLoginModel } from './models/build-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoginComponent extends FormLoginModel {
  public loading: boolean;
  public hiddenForm: boolean = false;
  constructor() {
    super();
  }

  public authentication(): void {}

  public closeForm(isShow: boolean): void {
    this.hiddenForm = isShow;
  }
}
