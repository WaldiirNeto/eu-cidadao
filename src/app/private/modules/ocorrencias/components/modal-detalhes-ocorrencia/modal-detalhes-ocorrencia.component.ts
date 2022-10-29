import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSelectChange } from '@angular/material/select'
import { UserService } from '@core/user/user.service'
import { CategoriaModel, ListCategoriaModel, SubCategoriaOcorrenciaModel } from '@shared/models/categoria.model'
import { SituacaoModel } from '@shared/models/situacao.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { FormModalDetalhesModel } from '../../models/form-modal-detalhes-ocorrencia.model'
import { OcorrenciasService } from '../../services/ocorrencias.service'

@Component({
  selector: 'app-modal-detalhes-ocorrencia',
  templateUrl: './modal-detalhes-ocorrencia.component.html',
  styleUrls: ['./modal-detalhes-ocorrencia.component.scss']
})
export class ModalDetalhesOcorrenciaComponent extends FormModalDetalhesModel implements OnInit, OnDestroy {

  protected showDespachoOcorrencia: boolean
  protected showRecusaOcorrencia: boolean
  protected listCategorias: Array<CategoriaModel>
  protected listSubCategorias: Array<SubCategoriaOcorrenciaModel>
  protected listSituacao: Array<SituacaoModel>
  protected loading: boolean
  private _destroy$ = new Subject()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ocurrence: any, type: string },
    private readonly _categoriaService: CategoriasService,
    private readonly _dialogRef: MatDialogRef<ModalDetalhesOcorrenciaComponent>,
    private readonly _snackBarService: SnackBarService,
    private readonly _ocorrenciaService: OcorrenciasService,
    private readonly _userService: UserService) {
    super()
  }


  ngOnInit(): void {
    if (this.data.ocurrence) {
      this.form.patchValue(this.data.ocurrence)
      const localizacao = {
        enderecoId: this.data.ocurrence.enderecoId,
        placeId: this.data.ocurrence.endereco.placeId,
        referencia: this.data.ocurrence.endereco.pontoDeReferencia
      }
      this.form.controls.localizacao.setValue(localizacao)
    }
    if (this.data.type === `view`) {
      this.form.controls.CategoriaId.disable()
      this.form.controls.subCategoriaOcorrenciaId.disable()
      this.form.controls.subCategoriaOcorrenciaId.disable()
    }

    this._buscarCategorias()
    this._getUserLocal()
  }

  public filtraSubCategoria(event: MatSelectChange): void {
    const categoriaId = event.value
    const getListCategorias = this.listCategorias
    const filterOcorrencias = getListCategorias.find((categoria) => categoria.id === categoriaId) as CategoriaModel
    this.listSubCategorias = filterOcorrencias.subCategoriasOcorrencias
  }
  //@TODO: usar esse método quando tiver a funcionalidade de comentarios
  // public adicionarComentario(): void {
  //   const comentario = this.form.controls['comentario'].value as string
  //   const obj = {
  //     id: 4,
  //     user: `Waldir`,
  //     date: `16 de agosto de 2022 ás 21:44`,
  //     comentario: comentario
  //   }
  //   this.comentarios.push(obj)
  // }

  public closeModalRecusaOcorrencia(): void {
    this.showRecusaOcorrencia = false
    this._dialogRef.close(true)
  }

  public salvarOcorrencia(): void {

    this.loading = true
    this._ocorrenciaService.atualizarOCorrencia(this.form.value)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (_) => {
          this._snackBarService.open(`Ocorrência atualizada com sucesso`, 'success')
          this._dialogRef.close(true)
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível atualizar a ocorrência, motivo: ${error.message}`, 'error')
        }
      })
  }

  public mudarSituacaoOcorrencia(event: MatCheckboxChange): void {
    if (event.checked) {
      // ID  status tratada
      this.form.controls.situacaoId.setValue(4)
    } else {
      this.form.controls.situacaoId.setValue(this.data.ocurrence.situacaoId)

    }
  }

  private _getUserLocal(): void {
    this._userService.getUser()
      .pipe(takeUntil(this._destroy$))
      .subscribe((user) => {
        this.form.controls.usuarioDespachanteId.setValue(user.id)
      })
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
        this.form.controls.subCategoriaOcorrenciaId.setValue(this.data.ocurrence.subCategoriaOcorrenciaId)
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }

}
