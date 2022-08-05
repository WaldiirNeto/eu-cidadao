import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '@core/token/token.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpPrivateClientService {
  private token: string
  constructor(private _http: HttpClient, private _tokenService: TokenService) {
    this.token = this._tokenService.token
  }

  public get<T>(url: string): Observable<T> {
    console.log(this.token)
    return this._http.get<T>(url, { headers: { 'Authorization': `Bearer ${this.token}` } })
  }
}
