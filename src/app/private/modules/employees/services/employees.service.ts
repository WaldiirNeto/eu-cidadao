import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { EmployeesModel } from '../models/employees.model'

@Injectable()
export class EmployeesService {

  constructor(private _http: HttpPrivateClientService) { }

  getEmployess(): Observable<EmployeesModel[]> {
    return this._http.get<EmployeesModel[]>(API_URL.GET_EMPLOYEES)
  }
}
