import { Injectable } from '@angular/core'
import { TokenModel } from '@shared/models/token.model'
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = localStorage.getItem('token') as string
  getUserLocal(): TokenModel {
    return jwt_decode(this._token)
  }
}
