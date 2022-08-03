import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UserModel } from '@shared/models/user.model'
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  constructor(private _http: HttpPrivateClientService) { }

  getUser(): Observable<UserModel> {
    return this._http.get<UserModel>(API_URL.GET_USER)
  }
}
