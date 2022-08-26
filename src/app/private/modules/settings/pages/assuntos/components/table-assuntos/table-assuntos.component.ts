import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { Subject, takeUntil } from 'rxjs'
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
  protected displayedColumns: string[] = ['assunto', 'categorias', 'actions']
  protected listOcurrences: ListCategoriaModel
  private selectedCategories: Array<any> = []
  protected filter = { Pagina: 1, TamanhoDaPagina: 1 }
  private _destroy$ = new Subject()
  constructor(private readonly _dialog: MatDialog, private readonly _ocurrenceService: CategoriasService) { }

  ngOnInit(): void {
    this.getListOcorrences()
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

  // private listCategoria(): void {
  //   this._categoriaService.ListCategorias()
  //     .pipe(
  //       takeUntil(this._destroy$),
  //       finalize(() => this.loading = true)
  //     )
  //     .subscribe({
  //       next: (list) => {
  //         this.dataSource = list
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         this._snackBarService
  //           .open(`Não foi possível buscar a lista de categorias, motivo: ${error.message}`, 'error')
  //       }
  //     })
  // }
  public pageUpdate(event: number): void {
    this.filter['Pagina'] = event
    this.getListOcorrences()
  }

  private getListOcorrences(): void {
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
