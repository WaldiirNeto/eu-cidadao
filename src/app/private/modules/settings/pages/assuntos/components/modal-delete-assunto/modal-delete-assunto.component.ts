import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CategoriaModel } from '@shared/models/categoria.model'
import { AssuntoService } from '../../services/assunto.service'

@Component({
  selector: 'app-modal-delete-assunto',
  templateUrl: './modal-delete-assunto.component.html',
  styleUrls: ['./modal-delete-assunto.component.scss']
})
export class ModalDeleteAssuntoComponent implements OnInit {
  protected loading: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public readonly assunto: CategoriaModel, private readonly _assuntoService: AssuntoService) { }

  ngOnInit(): void {
    console.log(this.assunto)
  }

}
