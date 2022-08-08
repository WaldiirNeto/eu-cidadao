import { Injectable } from '@angular/core'
import { HttpPrivateClientService } from '@core/http/http-private-client.service'
import API_URL from '@helpers/api-router.helper'
import { Observable } from 'rxjs'
import { ListCategoriaModel } from '../model/assunto.model'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpPrivateClientService) { }

  ListCategorias(): Observable<ListCategoriaModel> {
    return this.http.get<ListCategoriaModel>(API_URL.GET_CATEGORIAS)
  }
}
