import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { ListCityModel } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpPrivateClientService) { }

  getCitys(): Observable<ListCityModel> {
    return this._http.get<ListCityModel>(API_URL.GET_CITYS)
  }
}
