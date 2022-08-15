import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { EmployeesModel, UpdateEmployeesModel } from '../../models/employees.model'
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
  constructor(@Inject(MAT_DIALOG_DATA) public employee: EmployeesModel,
    private _employeesService: EmployeesService,
    private _snackBarService: SnackBarService,
    private _dialogRef: MatDialogRef<ModalCreateEmployeesComponent>) {
    super()
  }

  ngOnInit(): void {
    this.form.patchValue(this.employee)
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
          this._dialogRef.close()

        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível editar o usuário: motivo ${error.message}`, 'error')
          this._dialogRef.close()

        }
      })
  }

  ngOnDestroy(): void {
    this._dialogRef.close()
  }
}
