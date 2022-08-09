import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DeleteAll, EmployeesModel } from '../../models/employees.model'

@Component({
  selector: 'app-modal-delete-employee',
  templateUrl: './modal-delete-employee.component.html',
  styleUrls: ['./modal-delete-employee.component.scss']
})
export class ModalDeleteEmployeeComponent {

  protected loading: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.employee)
  }

}
