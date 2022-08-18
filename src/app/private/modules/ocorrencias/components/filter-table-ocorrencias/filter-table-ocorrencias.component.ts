import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-filter-table-ocorrencias',
  templateUrl: './filter-table-ocorrencias.component.html',
  styleUrls: ['./filter-table-ocorrencias.component.scss']
})
export class FilterTableOcorrenciasComponent implements OnInit {
  protected form: FormGroup
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
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      protocolo: new FormControl(''),
      assunto: new FormControl(''),
      categoria: new FormControl(''),
      responsavel: new FormControl(''),
      bairro: new FormControl(''),
      data_criacao: new FormControl(''),
      status: new FormControl('')
    })
  }

  public filterListEmit(): void {

  }

}
