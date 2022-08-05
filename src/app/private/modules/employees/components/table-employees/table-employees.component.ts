import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { EmployeesModel } from '../../models/employees.model'
import { EmployeesService } from '../../services/employees.service'
import { ModalCreateEmployeesComponent } from '../modal-create-employees/modal-create-employees.component'
import { ModalDeleteEmployeeComponent } from '../modal-delete-employee/modal-delete-employee.component'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent implements OnInit {
  protected displayedColumns: string[] = ['name', 'CPF', 'email', 'phone', 'date', 'actions']
  protected dataSource: Observable<EmployeesModel[]>
  constructor(private _employeesService: EmployeesService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = this._employeesService.getEmployess()
  }

  public openModalEdit(employee: EmployeesModel): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: employee
    })
  }

  public openModalDelete(employee: EmployeesModel): void {
    this._dialog.open(ModalDeleteEmployeeComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: employee
    })
  }
}
