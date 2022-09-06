import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { EmployeesModel, UpdateEmployeesModel } from '../models/employees.model'

@Injectable({ providedIn: 'root' })
export class EmployeesService {

  constructor(private _http: HttpPrivateClientService) { }

  getEmployess(): Observable<EmployeesModel[]> {
    return this._http.get<EmployeesModel[]>(API_URL.GET_EMPLOYEES)
  }

  updateEmployee(payload: UpdateEmployeesModel): Observable<void> {
    return this._http.post(API_URL.EMPLOYEE, payload)
  }
}
