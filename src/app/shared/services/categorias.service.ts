import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { UrlParams } from '@helpers/url-search-params.helper'
import { ListCategoriaModel } from '@shared/models/categoria.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpPrivateClientService) { }

  ListCategorias(filter?: any): Observable<ListCategoriaModel> {
    const params = UrlParams(filter)
    return this.http.get<ListCategoriaModel>(API_URL.CATEGORIAS + params)
  }
}
