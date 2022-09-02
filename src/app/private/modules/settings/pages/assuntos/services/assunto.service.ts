import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { CreateAssuntoFormModel } from '../model/assunto.model'

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public cadastrarAssunto(payload: CreateAssuntoFormModel): Observable<void> {
    return this._http.post(API_URL.CATEGORIAS, payload)
  }

  public deletarAssunto(id: number): Observable<void> {
    return this._http.delete(API_URL.CATEGORIA_ID(id))
  }
}