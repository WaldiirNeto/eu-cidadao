import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSelectChange } from '@angular/material/select'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { SituacaoModel } from '@shared/models/situacao.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { SituacaoService } from '@shared/services/situacao.service'
import { Subject, takeUntil } from 'rxjs'
import { FormModalDetalhesModel } from '../../models/form-modal-detalhes-ocorrencia.model'
import { OcorrenciaModel } from '../../models/ocorrencia.model'

@Component({
  selector: 'app-modal-detalhes-ocorrencia',
  templateUrl: './modal-detalhes-ocorrencia.component.html',
  styleUrls: ['./modal-detalhes-ocorrencia.component.scss']
})
export class ModalDetalhesOcorrenciaComponent extends FormModalDetalhesModel implements OnInit {

  protected details = {
    ocorrencia: `0000000001`,
    cidadao: `Alison Ferreira do Santos`,
    assunto: `Água e Esgoto`,
    categoria: `Bueiro entupido`,
    data_criacao: `2022-08-12`
  }

  protected comentarios = [{
    id: 1,
    user: `Usuário`,
    date: `8 de agosto de 2022 ás 11:44`,
    comentario: `Bueiro entupido faz 1 semana`
  }]

  protected showDespachoOcorrencia: boolean
  protected showRecusaOcorrencia: boolean
  protected listCategorias: Array<CategoriaModel>
  protected listSubCategorias: Array<SubCategoriaOcorrenciaModel>
  protected listSituacao: Array<SituacaoModel>
  private _destroy$ = new Subject()
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ocurrence: OcorrenciaModel, type: string },
    private readonly _categoriaService: CategoriasService) {
    super()
  }

  ngOnInit(): void {
    console.log(this.data.ocurrence)
    this._buscarCategorias()
  }


  public filtraSubCategoria(event: MatSelectChange): void {
    const categoriaId = event.value
    const getListCategorias = this.listCategorias
    const filterOcorrencias = getListCategorias.find((categoria) => categoria.id === categoriaId) as CategoriaModel
    this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
  }

  public adicionarComentario(): void {
    const comentario = this.form.controls['comentario'].value as string
    const obj = {
      id: 4,
      user: `Waldir`,
      date: `16 de agosto de 2022 ás 21:44`,
      comentario: comentario
    }
    this.comentarios.push(obj)
  }

  public closeModalRecusaOcorrencia(): void {
    console.log(`ok`)
    this.showRecusaOcorrencia = false
  }


  private _buscarCategorias(): void {
    this._categoriaService.ListCategorias()
      .pipe(takeUntil(this._destroy$))
      .subscribe((categorias: ListCategoriaModel) => {
        this.listCategorias = categorias.lista
        const getListCategorias = this.listCategorias
        const filterOcorrencias = getListCategorias
          .find((categoria) => categoria.id === this.data.ocurrence.categoriaOcorrencia.id) as CategoriaModel
        this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
        this.form.controls.CategoriaId.setValue(this.data.ocurrence.categoriaOcorrencia.id)
        this.form.controls.SubCategoriaId.setValue(this.data.ocurrence.subCategoriaOcorrenciaId)
      })
  }


}
