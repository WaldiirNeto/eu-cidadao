import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { ListSituacaoModel, SituacaoModel } from '@shared/models/situacao.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SituacaoService } from '@shared/services/situacao.service'
import { forkJoin, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { EmployeesModel } from '../../../employees/models/employees.model'
import { EmployeesService } from '../../../employees/services/employees.service'
import { FormFilterOcorrenciasModel } from '../../models/form-filter-ocorrencias.model'

@Component({
  selector: 'app-filter-table-ocorrencias',
  templateUrl: './filter-table-ocorrencias.component.html',
  styleUrls: ['./filter-table-ocorrencias.component.scss']
})
export class FilterTableOcorrenciasComponent extends FormFilterOcorrenciasModel implements OnInit, OnDestroy {

  protected listCategorias: CategoriaModel[]
  protected listSubCategorias: SubCategoriaOcorrenciaModel[]
  protected listSituacao: SituacaoModel[]
  protected listEmployees: EmployeesModel[]
  private _destroy$ = new Subject()
  constructor(
    private readonly _notifyComponentsService: NotifyComponentsService,
    private readonly _categoriaService: CategoriasService,
    private readonly _situacaoService: SituacaoService,
    private readonly _employeesService: EmployeesService) {
    super()
  }

  ngOnInit(): void {
    forkJoin([
      this._categoriaService.ListCategorias(),
      this._situacaoService.buscarListaSituacao(),
      this._employeesService.getEmployess()
    ])
      .pipe((takeUntil(this._destroy$)))
      .subscribe((responses: [ListCategoriaModel, ListSituacaoModel, EmployeesModel[]]) => {
        this.listCategorias = responses[0].lista
        this.listSituacao = responses[1].lista
        this.listEmployees = responses[2]
      })
  }


  public filterListEmit(): void {
    this._notifyComponentsService.setNotification(NotificationEnum.formFilterOcorrencia, this.form.value)
  }

  public filtraSubCategoria(event: MatSelectChange): void {
    const categoriaId = event.value
    const getListCategorias = this.listCategorias
    const filterOcorrencias = getListCategorias.find((categoria) => categoria.id === categoriaId) as CategoriaModel
    this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
  }

  public resetForm(): void {
    this.form.reset()
    this._notifyComponentsService.setNotification(NotificationEnum.formFilterOcorrenciaClear, null)
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
