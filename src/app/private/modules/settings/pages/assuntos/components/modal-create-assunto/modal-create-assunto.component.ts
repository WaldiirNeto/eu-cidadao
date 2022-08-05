import { Component, OnInit } from '@angular/core'
import { FormAssuntoModel } from '../../model/form-assunto.model'

@Component({
  selector: 'app-modal-create-assunto',
  templateUrl: './modal-create-assunto.component.html',
  styleUrls: ['./modal-create-assunto.component.scss']
})
export class ModalCreateAssuntoComponent extends FormAssuntoModel implements OnInit {
  protected loading: boolean
  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
