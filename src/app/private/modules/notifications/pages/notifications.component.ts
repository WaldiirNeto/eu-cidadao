import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModalNotificationsComponent } from '../components/modal-notifications/modal-notifications.component'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private readonly _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openModalCreateNotification(): void {
    this._dialog.open(ModalNotificationsComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal',
      width: `80%`
    })
  }

}
