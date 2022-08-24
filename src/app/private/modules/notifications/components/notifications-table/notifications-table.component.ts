import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { filter, finalize, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { NotificationListModel, NotificationModel } from '../../models/notification.model'
import { NotificationsService } from '../../services/notifications.service'
import { ModalNotificationsComponent } from '../modal-notifications/modal-notifications.component'

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
  constructor(
    private readonly _notificationsService: NotificationsService,
    private readonly _snackBarService: SnackBarService,
    private readonly _notifyComponentService: NotifyComponentsService,
    private readonly _dialog: MatDialog) { }

  ngOnInit(): void {
    this._getNotifications()
    this._getNotificationComponent()
  }

  private _getNotifications(): void {
    this.loadingList = true
    this._notificationsService.getListNotifications()
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => { this.loadingList = false })
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

  private _getNotificationComponent(): void {
    this._notifyComponentService.observeNotification()
      .pipe(
        takeUntil(this._destroy$),
        filter((checkFilter) => checkFilter &&
          (checkFilter.type === NotificationEnum.tableUpdateNotificacao || checkFilter.type === NotificationEnum.formFilterNotificacao))
      )
      .subscribe((_) => {
        this._getNotifications()
      })
  }

  public openModalDetails(notification: NotificationModel): void {
    this._dialog.open(ModalNotificationsComponent, {
      data: notification,
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal',
      width: `80%`
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
