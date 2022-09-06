import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { Subject, takeUntil } from 'rxjs'
import { EmployeesModel } from '../../models/employees.model'
import { EmployeesService } from '../../services/employees.service'
import { ModalCreateEmployeesComponent } from '../modal-create-employees/modal-create-employees.component'
import { ModalDeleteEmployeeComponent } from '../modal-delete-employee/modal-delete-employee.component'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent implements OnInit, OnDestroy {

  @Output() public tableEmit: EventEmitter<Array<string>> = new EventEmitter()

  protected displayedColumns: string[] = ['name', 'CPF', 'email', 'phone', 'date', 'actions']
  protected dataSource: EmployeesModel[]

  private selectedCategories: Array<string> = []
  private _destroy$ = new Subject()

  constructor(private _employeesService: EmployeesService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._employeesService.getEmployess()
      .pipe(takeUntil(this._destroy$))
      .subscribe((list) => {
        this.dataSource = list
      })
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
      data: {
        employee: employee,
        isDeleteAll: false
      }
    })
  }

  public seletedCategoria(event: MatCheckboxChange): void {
    if (event.checked) {
      const id = event.source.id
      this.selectedCategories.push(id)
    } else {
      this.selectedCategories = this.selectedCategories.filter((categoryId) => categoryId !== event.source.id)
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public populateFullArraySelected(event: MatCheckboxChange): void {
    if (event.checked) {
      this.selectedCategories = []
      this.selectedCategories.push(...this.dataSource.map(employee => employee.id))
    } else {
      this.selectedCategories = []
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public checkDinamically(id: string): boolean {
    const check = this.selectedCategories.some(employeeId => employeeId === id)
    return check
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
