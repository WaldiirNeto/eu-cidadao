import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSelectChange } from '@angular/material/select'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { CategoriasService } from '@shared/services/categorias.service'
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
  protected listCategorias: CategoriaModel[]
  protected listSubCategorias: SubCategoriaOcorrenciaModel[]
  private _destroy$ = new Subject()
  constructor(
    @Inject(MAT_DIALOG_DATA) public ocorrencia: OcorrenciaModel,
    private readonly _categoriaService: CategoriasService) {
    super()
  }

  ngOnInit(): void {
    console.log(this.ocorrencia)
    this._buscarCategorias()
    this.form.controls.CategoriaId.setValue(this.ocorrencia.categoriaOcorrencia.id)
    this.form.controls.SubCategoriaId.setValue(this.ocorrencia.subCategoriaOcorrenciaId)
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


  private _buscarCategorias(): void {
    this._categoriaService.ListCategorias()
      .pipe(takeUntil(this._destroy$))
      .subscribe((categorias: ListCategoriaModel) => {
        this.listCategorias = categorias.lista
        const getListCategorias = this.listCategorias
        const filterOcorrencias = getListCategorias
          .find((categoria) => categoria.id === this.ocorrencia.categoriaOcorrencia.id) as CategoriaModel
        this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
      })
  }

}
