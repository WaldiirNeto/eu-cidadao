import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormFilterOcorrenciasInterface, FormFilterOcorrenciasModel } from '../../models/form-filter-ocorrencias.model'

@Component({
  selector: 'app-filter-table-ocorrencias',
  templateUrl: './filter-table-ocorrencias.component.html',
  styleUrls: ['./filter-table-ocorrencias.component.scss']
})
export class FilterTableOcorrenciasComponent extends FormFilterOcorrenciasModel {

  @Output() public filterEmit: EventEmitter<FormFilterOcorrenciasInterface> = new EventEmitter()
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
  constructor() {
    super()
  }


  public filterListEmit(): void {
    this.filterEmit.emit(this.form.controls)
  }

}
