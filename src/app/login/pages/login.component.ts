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
  protected loading: boolean
  protected hiddenForm: boolean = false
  protected destroy$ = new Subject()
  protected isError: boolean
  constructor(private _loginService: LoginService, private _toast: SnackBarService, private _router: Router) {
    super()
  }

  protected authentication(): void {
    this.loading = true
    const payloadLogin = this.form.value as AuthParamsModel
    this._loginService.auth(payloadLogin)
      .pipe(takeUntil(this.destroy$),
        finalize(() => {
          this.loading = false
        }))
      .subscribe({
        next: (response: ResponseAuthParamsModel) => {
          console.log(response.access_token)
          localStorage.setItem('token', response.access_token)
          this._router.navigate(['dashboard'])
        },
        error: (_) => {
          this._toast.open('Não foi possível efetuar o login', SnackBarTypeModel.ERROR)
          this.isError = true
        }
      })
  }

  protected closeForm(isShow: boolean): void {
    this.hiddenForm = isShow
  }
}
