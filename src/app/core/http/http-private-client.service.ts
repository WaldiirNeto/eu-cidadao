import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '@core/token/token.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpPrivateClientService {
  private token = localStorage.getItem('token')
  constructor(private _http: HttpClient, private _tokenService: TokenService) {
  }

  public get<T>(url: string): Observable<T> {
    console.log(this.token)
    return this._http.get<T>(url, { headers: { 'Authorization': `Bearer ${this.token}` } })
  }
}
