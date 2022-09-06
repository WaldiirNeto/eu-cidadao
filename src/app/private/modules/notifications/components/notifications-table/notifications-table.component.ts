import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { Console } from 'console'
import { filter, finalize, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { SubCategoriaOcorrenciaModel } from '../../../ocorrencias/models/ocorrencia.model'
import { FilterNotificationModel, NotificationListModel, NotificationModel } from '../../models/notification.model'
import { NotificationsService } from '../../services/notifications.service'
import { ModalDeleteNotificationComponent } from '../modal-delete-notification/modal-delete-notification.component'
import { ModalNotificationsComponent } from '../modal-notifications/modal-notifications.component'

@Component({
  selector: 'app-notifications-table',
  templateUrl: './notifications-table.component.html',
  styleUrls: ['./notifications-table.component.scss']
})
export class NotificationsTableComponent implements OnInit, OnDestroy {
  protected displayedColumns: string[] = ['title_notification', 'subject', 'category', 'city', 'criticality']
  protected loadingList: boolean
  protected notificationsList: NotificationListModel
  protected filter: FilterNotificationModel = { Pagina: 1, TamanhoDaPagina: 10, OrdenarPor: `Titulo`, Ordem: `ASC` }
  protected ordenacaoInicial = { filtro: this.filter['OrdenarPor'], ordem: this.filter['Ordem'] }

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


  public pageUpdate(event: { pageIndex: number, pageSize: number }): void {
    this.filter['Pagina'] = event.pageIndex + 1
    this.filter['TamanhoDaPagina'] = event.pageSize
    this._getNotifications()
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


  public openModalDelete(notification: NotificationModel): void {
    this._dialog.open(ModalDeleteNotificationComponent, {
      data: notification,
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal'
    }).afterClosed()
      .pipe(takeUntil(this._destroy$),
        filter((result) => result === true))
      .subscribe((_) => {
        this.filter = { Pagina: 1, TamanhoDaPagina: 10 }
        this._getNotifications()
      })
  }

  public listSubCategories(subCategoriasOcorrencias: SubCategoriaOcorrenciaModel[]): string {
    return subCategoriasOcorrencias.map(subCategoria => subCategoria.nome).join(',')
  }

  public ordenarLista(ordenacao: { ordenarPor: string, ordem: string }): void {
    this.filter['OrdenarPor'] = ordenacao.ordenarPor
    this.filter['Ordem'] = ordenacao.ordem
    this.ordenacaoInicial = { filtro: this.filter['OrdenarPor'], ordem: this.filter['Ordem'] }
    this._getNotifications()
  }

  private _getNotifications(): void {
    this.loadingList = true
    this._notificationsService.getListNotifications(this.filter)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => { this.loadingList = false })
      )
      .subscribe({
        next: (notifications: NotificationListModel) => {
          this.notificationsList = notifications
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
          (
            checkFilter.type === NotificationEnum.tableUpdateNotificacao
            || checkFilter.type === NotificationEnum.formFilterNotificacao
            || checkFilter.type === NotificationEnum.formFilterClearNotificacao))
      )
      .subscribe((resultFilter) => {
        if (resultFilter.type === NotificationEnum.formFilterClearNotificacao
          || resultFilter.type === NotificationEnum.tableUpdateNotificacao) {
          this.filter = { Pagina: 1, TamanhoDaPagina: 10 }
        } else {
          this.filter = resultFilter.values
        }
        this._getNotifications()
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
