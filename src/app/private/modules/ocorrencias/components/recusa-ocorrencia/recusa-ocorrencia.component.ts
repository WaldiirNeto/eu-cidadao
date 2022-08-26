import { HttpErrorResponse } from '@angular/common/http'
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { SituacaoModel } from '@shared/models/situacao.model'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SituacaoService } from '@shared/services/situacao.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { RecusarOcorrencia } from '../../models/ocorrencia.model'
import { OcorrenciasService } from '../../services/ocorrencias.service'

@Component({
  selector: 'app-recusa-ocorrencia',
  templateUrl: './recusa-ocorrencia.component.html',
  styleUrls: ['./recusa-ocorrencia.component.scss']
})
export class RecusaOcorrenciaComponent implements OnInit, OnDestroy {
  @Input() ocorrenciaId: string
  @Output() closeDialog: EventEmitter<void> = new EventEmitter()
  protected listSituacao: Array<SituacaoModel>
  private _destroy$ = new Subject()
  protected situacaoId: number

  constructor(
    private readonly _situacaoService: SituacaoService,
    private readonly _ocorrenciaService: OcorrenciasService,
    private readonly _snackBarService: SnackBarService,
    private readonly _notifyService: NotifyComponentsService
  ) { }

  ngOnInit(): void {
    this._buscarSituacao()
  }

  public checkMotivo(event: MatSelectChange): void {
    this.situacaoId = event.value
  }

  public recusarOcorrencia(): void {
    const payload: RecusarOcorrencia = { ocorrenciaId: this.ocorrenciaId, situacaoId: this.situacaoId }
    this._ocorrenciaService.recusarOcorrencia(payload)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (_) => {
          this._snackBarService.open(`Ocorrência recusada`, 'success')
          this.close()
          this._notifyService.setNotification(NotificationEnum.formFilterOcorrenciaClear)
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível recusar a ocorrência, motivo: ${error.message}`, 'error')
        }
      })
  }
  public close(): void {
    this.closeDialog.emit()
  }


  private _buscarSituacao(): void {
    const filter = { situacaoDeRecusa: true }
    this._situacaoService.buscarListaSituacao(filter)
      .pipe(takeUntil(this._destroy$))
      .subscribe((listSituacao) => {
        this.listSituacao = listSituacao.lista
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
