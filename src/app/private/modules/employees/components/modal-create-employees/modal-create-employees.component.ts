import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ListCityModel } from '@shared/models/cidade.model'
import { CityService } from '@shared/services/city.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Observable, Subject, takeUntil } from 'rxjs'
import { UpdateEmployeesModel } from '../../models/employees.model'
import { FormEmployeesModel } from '../../models/form-employees.model'
import { EmployeesService } from '../../services/employees.service'


@Component({
  selector: 'app-modal-create-employees',
  templateUrl: './modal-create-employees.component.html',
  styleUrls: ['./modal-create-employees.component.scss']
})
export class ModalCreateEmployeesComponent extends FormEmployeesModel implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroy$ = new Subject()
  protected listSelects$: Observable<ListCityModel>

  constructor(@Inject(MAT_DIALOG_DATA) public employee: UpdateEmployeesModel,
    private readonly _employeesService: EmployeesService,
    private readonly _snackBarService: SnackBarService,
    private readonly _dialogRef: MatDialogRef<ModalCreateEmployeesComponent>,
    private readonly _cityService: CityService) {
    super()
  }

  ngOnInit(): void {

    this.listSelects$ = this._cityService.getCitys()

    if (this.employee) {
      this.form.patchValue(this.employee)
    } else {
      this.form.removeControl('id')
    }
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
    // const file = event.files[0]
    // if (file) {
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = () => {
    //     const base64 = reader.result as string
    //     this.form.controls.foto.setValue(base64)
    //   }
    // }
  }

  public onSubmit(): void {
    this.loading = true
    const form = this.form.value as UpdateEmployeesModel
    this._employeesService.updateEmployee(form)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: () => {
          this._snackBarService.open(`Usuário editado com sucesso`, 'success')
          this._dialogRef.close(true)

        },
        error: (error: HttpErrorResponse) => {
          console.log(error)
          this._snackBarService.open(`Não foi possível editar o usuário, motivo: ${error.error.join(',')}`, 'error')
        }
      })
  }

  ngOnDestroy(): void {
    this._dialogRef.close()
  }
}
