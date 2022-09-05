import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnInit, OnDestroy } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { NotificationModel } from '../../models/notification.model'
import { NotificationsService } from '../../services/notifications.service'

@Component({
  selector: 'app-modal-delete-notification',
  templateUrl: './modal-delete-notification.component.html',
  styleUrls: ['./modal-delete-notification.component.scss']
})
export class ModalDeleteNotificationComponent implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroy$ = new Subject()
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly notification: NotificationModel,
    private readonly _dialog: MatDialogRef<ModalDeleteNotificationComponent>,
    private readonly _notificationService: NotificationsService,
    private readonly _snackBarService: SnackBarService) { }

  ngOnInit(): void {
  }

  public deleteNotification(): void {
    this.loading = true
    this._notificationService.deleteNotification(this.notification.id)
      .pipe(takeUntil(this._destroy$),
        finalize(() => this.loading = false))
      .subscribe({
        next: (_) => {
          this._snackBarService.open(`Notificação deletada com sucesso`, `success`)
          this._dialog.close(true)
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível deletar a notificação, motivo: ${error.message}`, `error`)
        }
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
