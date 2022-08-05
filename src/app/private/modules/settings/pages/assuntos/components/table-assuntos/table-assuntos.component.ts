import { Component, OnInit } from '@angular/core'
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

  protected displayedColumns: string[] = ['assunto', 'responsavel', 'email', 'telefone', 'categorias', 'actions']
  protected dataSource: Assunto[]
  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [
      {
        assunto: `Água e Esgoto`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Conservação e limpeza`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Energia e iluminação`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Escola e educação`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Meio Ambiente`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Saúde pública`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
        assunto: `Segurança pública`,
        categorias: ``,
        email: `mussumIpsum@ipsum`,
        responsavel_area: `Mususm ipsum`,
        telefone: `00000000`
      },
      {
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
      data: assunto
    })
  }
}
