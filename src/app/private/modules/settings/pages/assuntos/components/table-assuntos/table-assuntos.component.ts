import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { Assunto } from '../../model/assunto.model'
import { ModalCreateAssuntoComponent } from '../modal-create-assunto/modal-create-assunto.component'
import { ModalDeleteAssuntoComponent } from '../modal-delete-assunto/modal-delete-assunto.component'

@Component({
  selector: 'app-table-assuntos',
  templateUrl: './table-assuntos.component.html',
  styleUrls: ['./table-assuntos.component.scss']
})
export class TableAssuntosComponent implements OnInit {

  @Output() public tableEmit: EventEmitter<Array<number>> = new EventEmitter()
  protected displayedColumns: string[] = ['assunto', 'responsavel', 'email', 'telefone', 'categorias', 'actions']
  protected dataSource: Assunto[]
  private selectedCategories: Array<any> = []
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [
      {
        id: 1,
        assunto: `Água e Esgoto`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 2,
        assunto: `Conservação e limpeza`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 3,
        assunto: `Energia e iluminação`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 4,
        assunto: `Escola e educação`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 5,
        assunto: `Meio Ambiente`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 6,
        assunto: `Saúde pública`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 7,
        assunto: `Segurança pública`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        id: 8,
        assunto: `Trânsito e vias públicas`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      }
    ]
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
    if (event.checked) {
      this.selectedCategories = []
      this.selectedCategories.push(...this.dataSource.map(category => category.id))
    } else {
      this.selectedCategories = []
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public checkDinamically(id: number): boolean {
    const check = this.selectedCategories.some(categoryId => categoryId === id)
    return check
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
}
