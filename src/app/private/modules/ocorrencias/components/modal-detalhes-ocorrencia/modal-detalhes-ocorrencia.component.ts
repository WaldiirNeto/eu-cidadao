import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

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

  protected ListAssuntos = [
    {
      id: 1,
      value: 'Água e esgoto'
    },
    {
      id: 1,
      value: 'Bairro'
    }
  ]

  protected Listcategorias = [
    {
      id: 1,
      value: 'Bueiro Entupido'
    },
    {
      id: 2,
      value: 'Lixo acumulado'
    }
  ]
  protected comentarios = [{
    id: 1,
    user: `Usuário`,
    date: `8 de agosto de 2022 ás 11:44`,
    comentario: `Bueiro entupido faz 1 semana`
  }]

  protected showDespachoOcorrencia: boolean
  protected showRecusaOcorrencia: boolean
  protected form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        assunto: new FormControl(''),
        categoria: new FormControl(''),
        comentario: new FormControl('')
      }
    )
  }

  public adicionarComentario(): void {
    const comentario = this.form.controls['comentario'].value
    const obj = {
      id: 4,
      user: `Waldir`,
      date: `16 de agosto de 2022 ás 21:44`,
      comentario: comentario
    }
    this.comentarios.push(obj)
  }

}
