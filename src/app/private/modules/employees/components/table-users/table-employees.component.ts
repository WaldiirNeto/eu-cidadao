import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { EmployeesModel } from '../../models/employees.model'
import { EmployeesService } from '../../services/employees.service'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent implements OnInit {
  protected displayedColumns: string[] = ['name', 'CPF', 'email', 'phone', 'date', 'actions']
  protected dataSource: Observable<EmployeesModel[]>
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.dataSource = this._employeesService.getEmployess()
  }
}
