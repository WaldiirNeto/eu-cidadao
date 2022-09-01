import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnDestroy, OnInit } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { Assunto, CreateAssuntoFormModel } from '../../model/assunto.model'
import { FormAssuntoModel } from '../../model/form-assunto.model'
import { AssuntoService } from '../../services/assunto.service'

@Component({
  selector: 'app-modal-create-assunto',
  templateUrl: './modal-create-assunto.component.html',
  styleUrls: ['./modal-create-assunto.component.scss']
})
export class ModalCreateAssuntoComponent extends FormAssuntoModel implements OnInit, OnDestroy {

  protected loading: boolean
  private _destroy$ = new Subject()
  public listCategoria: Array<{ nome: string, descricao: string }> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public assunto: CreateAssuntoFormModel,
    private readonly _assuntoService: AssuntoService,
    private readonly _snackBarService: SnackBarService,
    private readonly _notifyComponent: NotifyComponentsService,
    private readonly _dialog: MatDialogRef<ModalCreateAssuntoComponent>) {
    super()
  }

  ngOnInit(): void {
    if (this.assunto) {
      this.form.patchValue(this.assunto)
      this.listCategoria = this.assunto.subCategoriasOcorrencias
    }
  }

  public populateFileInForm(event: any): void {
    console.log(event.files)
  }

  public populateListSubCategorias(): void {
    const categoria = this.form.controls.categorias.value as string
    const checkIfRepeatCategoria = this.listCategoria.some((categoriaArray) => categoriaArray.nome === categoria)

    if (!checkIfRepeatCategoria) {
      this.listCategoria.push({ nome: categoria, descricao: categoria })
      this.form.controls.subCategoriasOcorrencias.setValue(this.listCategoria)
    }
  }

  public removeItemList(item: string): void {
    this.listCategoria = this.listCategoria.filter(categoria => categoria.nome !== item)
    this.form.controls.subCategoriasOcorrencias.setValue(this.listCategoria)
  }

  public manipulateFileImageMenu(event: any): void {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result as string
        this.form.controls.caminhoImagemMenu.setValue(base64)
      }
    }
  }
  public manipulateFileImageTela(event: any): void {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result as string
        this.form.controls.caminhoImagemTela.setValue(base64)
      }
    }
  }

  createAssunto(): void {
    this.loading = true
    const payload = this.form.value as CreateAssuntoFormModel
    this._assuntoService.cadastrarAssunto(payload)
      .pipe(
        takeUntil(this._destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe(({
        next: (_) => {
          this._snackBarService.open(`Assunto cadastrado com sucesso`, 'success')
          this._notifyComponent.setNotification(NotificationEnum.updateTableAssunto)
          this._dialog.close()
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`Não foi possível cadastrar o assunto, motivo: ${error.message}`, 'error')
        }
      }))
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
