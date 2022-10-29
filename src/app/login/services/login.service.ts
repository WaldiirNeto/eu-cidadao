import { Injectable } from '@angular/core'
import { HttpPublicClientService } from '@core/http/http-public-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { AuthParamsModel, ResponseAuthParamsModel } from '../models'

@Injectable()
export class LoginService {
  constructor(private _http: HttpPublicClientService) { }

  auth(payload: AuthParamsModel): Observable<ResponseAuthParamsModel> {
    return this._http.post<AuthParamsModel, ResponseAuthParamsModel>(
      API_URL.AUTH,
      payload
    )
  }
}
