import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { OcorrenciaListModel } from '../models/ocorrencia.model'
@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(private readonly _http: HttpPrivateClientService) { }

  public buscarOcorrencias(filter?: any): Observable<OcorrenciaListModel> {
    const params = new URLSearchParams()
    let query = ''
    if (filter) {
      for (const key in filter) {
        if (filter[key] === '' || filter[key] === null) {
          delete filter[key]
        } else {
          params.set(key, filter[key])
        }
      }
      query = Object.keys(filter).length > 0 ? `?${params}` : ''
    } else {
      query = ''
    }
    return this._http.get(`${API_URL.GET_OCORRENCIAS + query}`)
  }
}
