import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Assunto } from '../../model/assunto.model'
import { FormAssuntoModel } from '../../model/form-assunto.model'

@Component({
  selector: 'app-modal-create-assunto',
  templateUrl: './modal-create-assunto.component.html',
  styleUrls: ['./modal-create-assunto.component.scss']
})
export class ModalCreateAssuntoComponent extends FormAssuntoModel implements OnInit {
  protected loading: boolean
  public listCategoria: Array<string> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public assunto: Assunto) {
    super()
  }

  ngOnInit(): void {
    this.form.patchValue(this.assunto)
  }

  public populateListCategorias(): void {
    const categoria = this.form.controls.categorias.value as string
    const checkIfRepeatCategoria = this.listCategoria.some((categoriaArray) => categoriaArray === categoria)

    if (!checkIfRepeatCategoria) {
      this.listCategoria.push(categoria)
    }
  }

  public removeItemList(item: string): void {

    this.listCategoria = this.listCategoria.filter(categoria => categoria !== item)
  }
}
