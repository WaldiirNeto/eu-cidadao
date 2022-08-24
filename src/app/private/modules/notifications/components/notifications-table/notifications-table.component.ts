import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { SnackBarService } from '@shared/services/snackbar.service'
import { Subject, takeUntil } from 'rxjs'
import { NotificationListModel, NotificationModel } from '../../models/notification.model'
import { NotificationsService } from '../../services/notifications.service'

@Component({
  selector: 'app-notifications-table',
  templateUrl: './notifications-table.component.html',
  styleUrls: ['./notifications-table.component.scss']
})
export class NotificationsTableComponent implements OnInit, OnDestroy {
  protected displayedColumns: string[] = ['title_notification', 'subject', 'category', 'city', 'criticality']
  protected loadingList: boolean
  protected notificationsList: Array<NotificationModel>
  private _destroy$ = new Subject()
  constructor(private readonly _notificationsService: NotificationsService, private readonly _snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.getNotifications()
  }

  private getNotifications(): void {
    this._notificationsService.getListNotifications()
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe({
        next: (notifications: NotificationListModel) => {
          this.notificationsList = notifications.lista
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível buscar a lista de notificaçãoes, motivo: ${error.message}`, `error`)
        }
      })
  }

  public openModalDetails(notification: any): void {
    //   ocurrence: CategoriaModel
    //   this._dialog.open(ModalDetalhesOcorrenciaComponent, {
    //     data: ocurrence,
    //     enterAnimationDuration: `1000ms`,
    //     exitAnimationDuration: `500ms`,
    //     panelClass: 'padding-modal',
    //     width: `80%`
    //   })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
