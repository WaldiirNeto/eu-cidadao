import { Component, OnInit } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { CategoriaModel } from '@shared/models/categoria.model'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { filter, finalize, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { ModalCreateEmployeesComponent } from '../../../employees/components/modal-create-employees/modal-create-employees.component'
import { EmployeesModel } from '../../../employees/models/employees.model'
import { FilterOcorrenciaModel, OcorrenciaListModel } from '../../models/ocorrencia.model'
import { OcorrenciasService } from '../../services/ocorrencias.service'
import { ModalDetalhesOcorrenciaComponent } from '../modal-detalhes-ocorrencia/modal-detalhes-ocorrencia.component'

@Component({
  selector: 'app-ocorrencias-table',
  templateUrl: './ocorrencias-table.component.html',
  styleUrls: ['./ocorrencias-table.component.scss']
})
export class OcorrenciasTableComponent implements OnInit {

  protected displayedColumns: string[] = ['protocolo', 'assunto', 'categoria', 'bairro', 'data_criacao', 'status']
  protected listOcurrences: OcorrenciaListModel
  protected loadingList: boolean
  protected filter: FilterOcorrenciaModel = { Pagina: 1, TamanhoDaPagina: 10 }
  private selectedCategories: Array<string> = []
  private _destroy$ = new Subject()

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _notifyComponentsService: NotifyComponentsService,
    private readonly _ocorrenciaService: OcorrenciasService,
    private readonly _snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this._observeNotification()
    this._getListOccurrences()
  }

  private _getListOccurrences(): void {
    this.loadingList = true
    this._ocorrenciaService.buscarOcorrencias(this.filter)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => this.loadingList = false)
      )
      .subscribe({
        next: (listOccurrences: OcorrenciaListModel) => {
          this.listOcurrences = listOccurrences
        },
        error: (_) => {
          this._snackBarService.open(`Não foi possível buscar a lista de ocorrências`, 'error')
        }
      })
  }

  public openModalEdit(employee: EmployeesModel): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: employee
    })
  }

  public openModalDetails(ocurrence: CategoriaModel, type: string): void {
    this._dialog.open(ModalDetalhesOcorrenciaComponent, {
      data: { ocurrence, type },
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal-ocorrencia',
      width: `80%`
    })
  }

  public seletedCategoria(event: MatCheckboxChange): void {
    if (event.checked) {
      const id = event.source.id
      this.selectedCategories.push(id)
    } else {
      this.selectedCategories = this.selectedCategories.filter((categoryId) => categoryId !== event.source.id)
    }
  }

  public populateFullArraySelected(event: MatCheckboxChange): void {
    if (event.checked) {
      this.selectedCategories = []
      this.selectedCategories.push(...this.listOcurrences.lista.map(ocurrrence => ocurrrence.id))
    } else {
      this.selectedCategories = []
    }
  }

  public checkDinamically(id: string): boolean {
    const check = this.selectedCategories.some(employeeId => employeeId === id)
    return check
  }

  public pageUpdate(event: number): void {
    this.filter['Pagina'] = event
    this._getListOccurrences()
  }

  private _observeNotification(): void {
    this._notifyComponentsService
      .observeNotification()
      .pipe(
        takeUntil(this._destroy$),
        filter(checkFilter => checkFilter
          &&
          (
            checkFilter.type === NotificationEnum.formFilterOcorrencia
            || checkFilter.type === NotificationEnum.formFilterOcorrenciaClear
          ))
      )
      .subscribe((notification) => {
        if (notification.type === NotificationEnum.formFilterOcorrenciaClear) {
          this.filter = { Pagina: 1, TamanhoDaPagina: 10 }
        } else {
          this.filter = notification.values
        }
        this._getListOccurrences()
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
