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


}
