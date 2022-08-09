import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { EmployeesModel } from '../../models/employees.model'
import { FormEmployeesModel } from '../../models/form-employees.model'

@Component({
  selector: 'app-modal-create-employees',
  templateUrl: './modal-create-employees.component.html',
  styleUrls: ['./modal-create-employees.component.scss']
})
export class ModalCreateEmployeesComponent extends FormEmployeesModel implements OnInit {

  protected loading: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public employee: EmployeesModel) {
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
    console.log(event.files)
  }

  public onSubmit(): void {
    console.log(this.form.value)
  }


}
