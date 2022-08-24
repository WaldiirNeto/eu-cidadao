import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UrlParams } from '@helpers/url-search-params.helper'
import { Observable } from 'rxjs'
import { OcorrenciaListModel } from '../models/ocorrencia.model'
@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public buscarOcorrencias(filter?: any): Observable<OcorrenciaListModel> {
    const params = UrlParams(filter)
    return this._http.get(`${API_URL.GET_OCORRENCIAS + params}`)
  }
}
