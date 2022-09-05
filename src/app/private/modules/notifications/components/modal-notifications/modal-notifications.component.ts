import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ListCategoriaModel } from '@shared/models/categoria.model'
import { ListCityModel } from '@shared/models/cidade.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { CityService } from '@shared/services/city.service'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, forkJoin, Observable, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { FormCreateNotificationModel } from '../../models/form-create-notification.model'
import { NotificationModel } from '../../models/notification.model'
import { NotificationsService } from '../../services/notifications.service'

@Component({
  selector: 'app-modal-notifications',
  templateUrl: './modal-notifications.component.html',
  styleUrls: ['./modal-notifications.component.scss']
})
export class ModalNotificationsComponent extends FormCreateNotificationModel implements OnInit, OnDestroy {

  protected listSelects$: Observable<[ListCityModel, ListCategoriaModel]>
  protected loading: boolean
  protected listCriticidade = [
    { id: 1, description: `Baixo` },
    { id: 2, description: `Média` },
    { id: 3, description: `Alta` },
    { id: 4, description: `Urgente` }]
  private _destroy$ = new Subject()

  constructor(
    private readonly _notificationService: NotificationsService,
    private readonly _snackBarService: SnackBarService,
    private readonly _notifyComponentService: NotifyComponentsService,
    private readonly _cityService: CityService,
    private readonly _categoryService: CategoriasService,
    private readonly _dialog: MatDialogRef<ModalNotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public notification: NotificationModel) {
    super()
  }

  ngOnInit(): void {
    console.log(this.notification)
    this.listSelects$ = forkJoin([this._cityService.getCitys(), this._categoryService.ListCategorias()])
    if (this.notification) {
      this.form.patchValue(this.notification)
      console.log(this.form.value)
    }
  }

  public publishNotification(): void {
    this.loading = true
    const payload = this.form.value as NotificationModel
    this._notificationService.publishNotification(payload)
      .pipe(takeUntil(this._destroy$),
        finalize(() => this.loading = false))
      .subscribe({
        next: (_) => {
          this._snackBarService.open(`Notificação cadastrada com sucesso`, `success`)
          this._notifyComponentService.setNotification(NotificationEnum.tableUpdateNotificacao)
          this._dialog.close()
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível cadastrar a notificação, motivo: ${error.message}`, `error`)
        }
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
