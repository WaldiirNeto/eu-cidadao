import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { UserService } from '@core/user/user.service'
import { ListCityModel } from '@shared/models/cidade.model'
import { UserModel, UserUpdateModel } from '@shared/models/user.model'
import { CityService } from '@shared/services/city.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Observable, Subject, takeUntil } from 'rxjs'
import { FormProfileModel } from '../models/profile-form.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormProfileModel implements OnInit, OnDestroy {

  protected listSelects$: Observable<ListCityModel>
  protected invalidLengthPass: boolean = false
  protected invalidUppercasePass: boolean = false
  protected invalidLowercasePass: boolean = false
  protected invalidNumberPass: boolean = false
  protected invalidCharacterSpecialExist: boolean = false
  protected loading: boolean = false
  private _destroy$ = new Subject()
  constructor(
    private readonly _userService: UserService,
    private readonly _cityService: CityService,
    private readonly _snackBarService: SnackBarService) {
    super()
  }

  ngOnInit(): void {
    this._userService.getUser()
      .pipe(takeUntil(this._destroy$))
      .subscribe((userData: UserModel) => {
        this.form.patchValue(
          {
            id: userData.id,
            firstName: userData.primeiroNome,
            lastName: userData.ultimoNome,
            celular: userData.celular,
            cidadaoId: userData.id,
            cidadeId: userData.cidadeId,
            cpf: userData.cpf,
            dataDeNascimento: userData.dataNascimento,
            email: userData.email
          }
        )
      })

    this.listSelects$ = this._cityService.getCitys()
    this.form.controls.novaSenha.valueChanges
      .subscribe((senha: string | null) => {
        const regExpUpperCaseExist = /[A-Z]/g
        const regExpLowerCaseExist = /[a-z]/g
        const regExpNumberExist = /[0-9]/g
        const regExpCharacterSpecialExist = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g
        if (senha) {
          this.invalidLengthPass = (senha.length >= 8) ? true : false
          this.invalidLowercasePass = regExpLowerCaseExist.test(senha)
          this.invalidNumberPass = regExpNumberExist.test(senha)
          this.invalidCharacterSpecialExist = regExpCharacterSpecialExist.test(senha)
          this.invalidUppercasePass = regExpUpperCaseExist.test(senha)
        } else {
          this.invalidLengthPass = false
          this.invalidUppercasePass = false
          this.invalidLowercasePass = false
          this.invalidNumberPass = false
          this.invalidCharacterSpecialExist = false
        }
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

  public get getPasswordTextError(): string {

    const checkPassword = this.form.controls.confirmarNovaSenha.errors?.['passwordNotEqual']
    if (checkPassword) {
      return `Senhas não coincidem`
    } else {
      return `Campo obrigatório`
    }
  }


  public checkPasswordValid(): boolean {
    if (this.form.controls.novaSenha.value != '') {
      return [
        this.invalidLengthPass,
        this.invalidUppercasePass,
        this.invalidLowercasePass,
        this.invalidNumberPass,
        this.invalidCharacterSpecialExist
      ].every((check) => check === true)
    } else {
      return true
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

  public updateUser(): void {
    this.loading = true
    let payload = this.form.value as UserUpdateModel

    if (this.form.controls.novaSenha.value === '') {
      delete payload['senha'] // backend precisa remover a obrigatoriedade do campo
    } else {
      this.form.controls.senha.setValue(this.form.controls.novaSenha.value)
      payload = this.form.value as UserUpdateModel
    }
    this._userService.updateUser(payload)
      .pipe((takeUntil(this._destroy$)), finalize(() => this.loading = false))
      .subscribe(({
        next: (_) => {
          this._snackBarService.open(`Usuário atualizado com sucesso`, `success`)
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível atualizar o usuário, motivo: ${error.message}`, `error`)
        }
      }))
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
