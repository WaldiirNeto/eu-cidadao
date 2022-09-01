import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UserModel, UserUpdateModel } from '@shared/models/user.model'
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public getUser(): Observable<UserModel> {
    return this._http.get<UserModel>(API_URL.USER)
  }

  public updateUser(payload: UserUpdateModel): Observable<void> {
    return this._http.put(API_URL.USER, payload)
  }

  public logOutUser(): void {
    localStorage.removeItem('token')
  }
}
