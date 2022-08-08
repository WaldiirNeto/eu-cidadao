import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ModalCreateAssuntoComponent } from '../components/modal-create-assunto/modal-create-assunto.component'
import { Assunto } from '../model/assunto.model'

@Component({
  selector: 'app-assuntos',
  templateUrl: './assuntos.component.html',
  styleUrls: ['./assuntos.component.scss']
})
export class AssuntosComponent implements OnInit {
  public showIcon: boolean

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  get formFilter(): FormGroup {
    return new FormGroup({
      assunto: new FormControl('')
    })
  }

  public openDialog(): void {
    this._dialog.open(ModalCreateAssuntoComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`
    })
  }

  public showIconDelete(listSelectedCategories: Array<number>): void {
    if (listSelectedCategories.length > 1) {
      this.showIcon = true
    } else {
      this.showIcon = false
    }
  }
}
