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
  constructor(@Inject(MAT_DIALOG_DATA) public assunto: Assunto) {
    super()
  }

  ngOnInit(): void {
    this.form.patchValue(this.assunto)
  }

}
