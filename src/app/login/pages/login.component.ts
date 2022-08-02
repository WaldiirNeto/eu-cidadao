import { Component } from '@angular/core'
import { SnackBarService } from '@shared/services/snackbar.service'
import { SnackBarTypeModel } from '@shared/models/type-snackbar.model'

import { finalize, Subject } from 'rxjs'
import { takeUntil } from 'rxjs'
import { AuthParamsModel, ResponseAuthParamsModel } from '../models'
import { FormLoginModel } from '../models/build-form'
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormLoginModel {
  public loading: boolean
  public hiddenForm: boolean = false
  public destroy$ = new Subject()
  public isError: boolean
  constructor(private _loginService: LoginService, private _toast: SnackBarService, private _router: Router) {
    super()
  }

  public authentication(): void {
    this.loading = true
    const payloadLogin = this.form.value as AuthParamsModel
    this._loginService.auth(payloadLogin)
      .pipe(takeUntil(this.destroy$),
        finalize(() => {
          this.loading = false
        }))
      .subscribe({
        next: (response: ResponseAuthParamsModel) => {
          localStorage.setItem('token', response.access_token)
          this._router.navigate(['dashboard'])
        },
        error: (_) => {
          this._toast.open('Não foi possível efetuar o login', SnackBarTypeModel.ERROR)
          this.isError = true
        }
      })
  }

  public closeForm(isShow: boolean): void {
    this.hiddenForm = isShow
  }
}
