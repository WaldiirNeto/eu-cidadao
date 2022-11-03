import { Component, OnInit } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { ListSelectModel, SubCategoriaOcorrenciaModel } from '@shared/models/index'
import { CategoriasService } from '@shared/services/categorias.service'
import { map, Observable, shareReplay } from 'rxjs'
import { EmployeesModel } from '../../../employees/models/employees.model'
import { EmployeesService } from '../../../employees/services/employees.service'
import { FormPlebiscitoModel } from '../../models'

@Component({
  selector: 'app-modal-plebiscito',
  templateUrl: './modal-plebiscito.component.html',
  styleUrls: ['./modal-plebiscito.component.scss']
})
export class ModalPlebiscitoComponent extends FormPlebiscitoModel implements OnInit {

  protected categorias$: Observable<ListSelectModel[]>
  protected subCategorias$: Observable<ListSelectModel[]>
  protected responsaveis$: Observable<ListSelectModel[]>
  constructor(
    private readonly _categoriaService: CategoriasService,
    private readonly _employeesService: EmployeesService) {
    super()
  }

  ngOnInit(): void {
    this.categorias$ = this._categoriaService.ListCategorias()
      .pipe(shareReplay(1), map((list) => {
        return list.lista.map(categoria => {
          const listToInput: ListSelectModel = {
            id: categoria.id,
            value: categoria.nome,
            icon: categoria.caminhoImagemMenu,
            anyHelp: categoria.subCategoriasOcorrencias
          }
          return listToInput
        })
      }))
    this.responsaveis$ = this._employeesService.getEmployess()
      .pipe(shareReplay(1), map((list) => {
        return list.map(responsavel => {
          const listToInput: ListSelectModel = {
            id: responsavel.id,
            value: responsavel.nome
          }
          return listToInput
        })
      }))
  }

  public filtraSubCategoria(event: MatSelectChange): void {
    const categoriaId = event.value
    this.subCategorias$ = this.categorias$
      .pipe(
        map((list) => {
          const categorias = list.find((categoria) => categoria.id === categoriaId)
          return categorias?.anyHelp?.map((item: SubCategoriaOcorrenciaModel) => {
            const listToInput: ListSelectModel = {
              id: item.categoriaOcorrenciaId,
              value: item.nome
            }
            return listToInput
          })
        }))
  }
}
