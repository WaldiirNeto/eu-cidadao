import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UrlParams } from '@helpers/url-search-params.helper'
import { ListSituacaoModel } from '@shared/models/situacao.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  constructor(private _http: HttpPrivateClientService) { }

  buscarListaSituacao(filter?: any): Observable<ListSituacaoModel> {
    const params = UrlParams(filter)
    return this._http.get(API_URL.GET_SITUACAO + params)
  }
}
