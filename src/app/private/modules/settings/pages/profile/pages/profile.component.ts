import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserService } from '@core/user/user.service'
import { UserModel } from '@shared/models/user.model'
import { Subject, takeUntil } from 'rxjs'
import { FormProfileModel } from '../models/profile-form.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormProfileModel implements OnInit, OnDestroy {

  private _destroy$ = new Subject()
  constructor(private _userService: UserService) {
    super()
  }

  ngOnInit(): void {
    this._userService.getUser()
      .pipe(takeUntil(this._destroy$))
      .subscribe((userData: UserModel) => {
        console.log(userData)
        this.form.controls.id.setValue(userData.id)
      })
  }

  public get getTextError(): string {
    const checkCpf = (this.form.controls.cpf.touched || this.form.controls.cpf.dirty) && this.form.controls.cpf.invalid
    if (checkCpf) {
      return `CPF inválido`
    } else {
      return `CPF obrigatório`
    }
  }

  public populateFileInForm(event: any): void {
    const file = event.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result as string
        this.form.controls.foto.setValue(base64)
      }
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
