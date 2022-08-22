import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { ListCategoriaModel } from '@shared/models/categoria.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpPrivateClientService) { }

  ListCategorias(): Observable<ListCategoriaModel> {
    return this.http.get<ListCategoriaModel>(API_URL.GET_CATEGORIAS)
  }
}
