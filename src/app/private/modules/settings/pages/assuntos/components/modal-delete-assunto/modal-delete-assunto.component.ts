import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Assunto } from '../../model/assunto.model'

@Component({
  selector: 'app-modal-delete-assunto',
  templateUrl: './modal-delete-assunto.component.html',
  styleUrls: ['./modal-delete-assunto.component.scss']
})
export class ModalDeleteAssuntoComponent implements OnInit {
  protected loading: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public assunto: Assunto) { }

  ngOnInit(): void {
  }

}
