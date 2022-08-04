import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ModalCreateEmployeesComponent } from '../components/modal-create-employees/modal-create-employees.component'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }
  get formFilter(): FormGroup {
    return new FormGroup({
      user: new FormControl('')
    })
  }

  openDialog(): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      width: '250px',
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`
    })
  }
}
