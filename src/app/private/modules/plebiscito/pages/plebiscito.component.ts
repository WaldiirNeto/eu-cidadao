import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModalPlebiscitoComponent } from '../components/modal-plebiscito/modal-plebiscito.component'

@Component({
  selector: 'app-plebiscito',
  templateUrl: './plebiscito.component.html',
  styleUrls: ['./plebiscito.component.scss']
})
export class PlebiscitoComponent implements OnInit {

  constructor(private readonly _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openModalCreatePlebistico(): void {
    this._dialog.open(ModalPlebiscitoComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal',
      width: `80%`
    })
  }

}
