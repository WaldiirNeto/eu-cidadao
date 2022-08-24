import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { Router } from '@angular/router'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { ListSituacaoModel, SituacaoModel } from '@shared/models/situacao.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { SituacaoService } from '@shared/services/situacao.service'
import { forkJoin, Subject, takeUntil } from 'rxjs'
import { EmployeesModel } from '../../../employees/models/employees.model'
import { EmployeesService } from '../../../employees/services/employees.service'
import { FormRelatoriosModel } from '../../models/form-relatorios.model'

@Component({
  selector: 'app-filter-relatorios',
  templateUrl: './filter-relatorios.component.html',
  styleUrls: ['./filter-relatorios.component.scss']
})
export class FilterRelatoriosComponent extends FormRelatoriosModel implements OnInit, OnDestroy {

  protected typeReport = ['TABELA', 'BAR', 'COMPLETO']
  protected loading: boolean
  protected listCategorias: CategoriaModel[]
  protected listSubCategorias: SubCategoriaOcorrenciaModel[]
  protected listSituacao: SituacaoModel[]
  protected listEmployees: EmployeesModel[]
  private _destroy$ = new Subject()

  constructor(private readonly _router: Router,
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

  public navigateToManager(): void {
    const typeReport = this.form.controls.tipoRelatorio.value as string
    const checkType = {
      'TABELA': 'relatorios/manager',
      'BAR': 'relatorios/bar'
    }[typeReport]
    this._router.navigate([checkType])
  }

  public filtraSubCategoria(event: MatSelectChange): void {
    const categoriaId = event.value
    const getListCategorias = this.listCategorias
    const filterOcorrencias = getListCategorias.find((categoria) => categoria.id === categoriaId) as CategoriaModel
    this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
  }


  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
