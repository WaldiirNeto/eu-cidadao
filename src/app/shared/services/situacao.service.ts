import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { ListSituacaoModel } from '@shared/models/situacao.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  constructor(private _http: HttpPrivateClientService) { }

  buscarListaSituacao(): Observable<ListSituacaoModel> {
    return this._http.get(API_URL.GET_SITUACAO)
  }
}
