import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-modal-detalhes-ocorrencia',
  templateUrl: './modal-detalhes-ocorrencia.component.html',
  styleUrls: ['./modal-detalhes-ocorrencia.component.scss']
})
export class ModalDetalhesOcorrenciaComponent implements OnInit {

  protected details = {
    ocorrencia: `0000000001`,
    cidadao: `Alison Ferreira do Santos`,
    assunto: `Água e Esgoto`,
    categoria: `Bueiro entupido`,
    data_criacao: `2022-08-12`
  }

  protected showModalPerson: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
