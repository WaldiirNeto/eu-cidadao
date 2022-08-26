import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UrlParams } from '@helpers/url-search-params.helper'
import { Observable } from 'rxjs'
import { OcorrenciaListModel, RecusarOcorrencia } from '../models/ocorrencia.model'
@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public buscarOcorrencias(filter?: any): Observable<OcorrenciaListModel> {
    const params = UrlParams(filter)
    console.log(params)
    return this._http.get(`${API_URL.GET_OCORRENCIAS + params}`)
  }

  public recusarOcorrencia(payload: RecusarOcorrencia): Observable<void> {
    return this._http.post(API_URL.ALTERAR_OCORRENCIA, payload)
  }
}
