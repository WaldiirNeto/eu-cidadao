import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { filter, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { Assunto } from '../../model/assunto.model'
import { ModalCreateAssuntoComponent } from '../modal-create-assunto/modal-create-assunto.component'
import { ModalDeleteAssuntoComponent } from '../modal-delete-assunto/modal-delete-assunto.component'

@Component({
  selector: 'app-table-assuntos',
  templateUrl: './table-assuntos.component.html',
  styleUrls: ['./table-assuntos.component.scss']
})
export class TableAssuntosComponent implements OnInit, OnDestroy {

  @Output() public tableEmit: EventEmitter<Array<number>> = new EventEmitter()
  protected displayedColumns: string[] = ['assunto', 'categorias', 'status', 'actions']
  protected listOcurrences: ListCategoriaModel
  private selectedCategories: Array<any> = []
  protected filter = { Pagina: 1, TamanhoDaPagina: 10 }
  private _destroy$ = new Subject()
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _ocurrenceService: CategoriasService,
    private readonly _notifyComponent: NotifyComponentsService) { }

  ngOnInit(): void {
    this.getListAssuntos()
    this.getNotify()
  }

  private getNotify(): void {
    this._notifyComponent.observeNotification()
      .pipe(
        takeUntil(this._destroy$),
        filter(checkFilter => checkFilter && checkFilter.type === NotificationEnum.updateTableAssunto))
      .subscribe((_) => {
        this.filter = { Pagina: 1, TamanhoDaPagina: 10 }
        this.getListAssuntos()
      })
  }

  public openModalEdit(assunto: Assunto): void {
    this._dialog.open(ModalCreateAssuntoComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: assunto
    })
  }

  public openModalDelete(assunto: Assunto): void {
    this._dialog.open(ModalDeleteAssuntoComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: assunto,
      autoFocus: false
    }).afterClosed()
      .pipe(
        takeUntil(this._destroy$),
        filter((result) => result === true))
      .subscribe((_) => {
        this.getListAssuntos()
      })
  }

  public seletedCategoria(event: MatCheckboxChange): void {
    if (event.checked) {
      const id = event.source.id
      this.selectedCategories.push(id)
    } else {
      this.selectedCategories = this.selectedCategories.filter((categoryId) => categoryId !== event.source.id)
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public populateFullArraySelected(event: MatCheckboxChange): void {
    // if (event.checked) {
    //   this.selectedCategories = []
    //   this.selectedCategories.push(...this.dataSource.map(category => category.id))
    // } else {
    //   this.selectedCategories = []
    // }
    // this.tableEmit.emit(this.selectedCategories)
  }

  public checkDinamically(id: number): boolean {
    const check = this.selectedCategories.some(categoryId => categoryId === id)
    return check
  }

  public listSubCategories(subCategoriasOcorrencias: SubCategoriaOcorrenciaModel[]): string {
    return subCategoriasOcorrencias.map(subCategoria => subCategoria.nome).join(',')
  }

  public pageUpdate(event: { pageIndex: number, pageSize: number }): void {
    this.filter['Pagina'] = event.pageIndex + 1
    this.filter['TamanhoDaPagina'] = event.pageSize
    this.getListAssuntos()
  }

  private getListAssuntos(): void {
    this._ocurrenceService.ListCategorias(this.filter)
      .pipe(takeUntil(this._destroy$))
      .subscribe((categorias: ListCategoriaModel) => {
        this.listOcurrences = categorias
      })
  }
  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
