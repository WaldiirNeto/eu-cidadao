import { Component } from '@angular/core'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { FormFilterOcorrenciasModel } from '../../models/form-filter-ocorrencias.model'

@Component({
  selector: 'app-filter-table-ocorrencias',
  templateUrl: './filter-table-ocorrencias.component.html',
  styleUrls: ['./filter-table-ocorrencias.component.scss']
})
export class FilterTableOcorrenciasComponent extends FormFilterOcorrenciasModel {
  protected listStatus = [
    {
      id: 'resolvidas',
      value: 'Resolvidas'
    },
    {
      id: 'tratamento',
      value: 'Tratamento'
    }, {
      id: 'recusadas',
      value: 'Recusadas'
    }, {
      id: 'pendentes',
      value: 'Pendentes'
    }
  ]
  protected listSelects = [
    {
      id: 'protocolo',
      value: 'Protocolo'
    },

    {
      id: 'assunto',
      value: 'Assunto'
    },
    {
      id: 'categoria',
      value: 'Categoria'
    },
    {
      id: 'responsavel',
      value: 'Responsável'
    },
    {
      id: 'bairro',
      value: 'Bairro'
    },
    {
      id: 'data_criacao',
      value: 'Data criação'
    },
  ]
  constructor(private readonly _notifyComponentsService: NotifyComponentsService) {
    super()
  }


  public filterListEmit(): void {
    this._notifyComponentsService.setNotification(NotificationEnum.formFilterOcorrencia, this.form.value)
  }

  public resetForm(): void {
    this.form.reset()
    this._notifyComponentsService.setNotification(NotificationEnum.formFilterOcorrenciaClear, null)

  }

}
