import { Injectable } from '@angular/core'
import jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _token = localStorage.getItem('token') as string

  get token(): string {
    return this._token
  }
}
