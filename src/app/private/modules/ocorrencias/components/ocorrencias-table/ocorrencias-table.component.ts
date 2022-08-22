import { Component, OnInit } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
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
  private selectedCategories: Array<string> = []
  private _filter: FilterOcorrenciaModel
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
    console.log(this.loadingList)
    this._ocorrenciaService.buscarOcorrencias(this._filter)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => this.loadingList = false)
      )
      .subscribe({
        next: (listOccurrences: OcorrenciaListModel) => {
          this.listOcurrences = listOccurrences
          console.log(this.listOcurrences)
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

  public openModalDetails(): void {
    this._dialog.open(ModalDetalhesOcorrenciaComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal'
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
    // if (event.checked) {
    //   this.selectedCategories = []
    //   this.selectedCategories.push(...this.dataSource.map(relatorio => relatorio.id))
    // } else {
    //   this.selectedCategories = []
    // }
  }

  public checkDinamically(id: string): boolean {
    const check = this.selectedCategories.some(employeeId => employeeId === id)
    return check
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
        this._filter = notification.values
        this._getListOccurrences()
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
