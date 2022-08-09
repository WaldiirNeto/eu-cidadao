import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ModalCreateEmployeesComponent } from '../components/modal-create-employees/modal-create-employees.component'
import { ModalDeleteEmployeeComponent } from '../components/modal-delete-employee/modal-delete-employee.component'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public showIcon: boolean

  constructor(private _dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
  get formFilter(): FormGroup {
    return new FormGroup({
      user: new FormControl('')
    })
  }

  public openDialog(): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`
    })
  }

  public showIconDelete(listSelectedCategories: Array<string>): void {
    if (listSelectedCategories.length > 1) {
      this.showIcon = true
    } else {
      this.showIcon = false
    }
  }

  public deleteAllCategories(): void {
    this._dialog.open(ModalDeleteEmployeeComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      hasBackdrop: false,
      data: {
        employee: null,
        isDeleteAll: true
      }
    })
  }
}
