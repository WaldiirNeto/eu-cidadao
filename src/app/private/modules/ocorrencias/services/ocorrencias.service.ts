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

  public buscarOcorrencias(): Observable<OcorrenciaListModel> {
    return this._http.get(API_URL.GET_OCORRENCIAS)
  }
}
