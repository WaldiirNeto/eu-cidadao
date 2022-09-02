import { HttpErrorResponse } from '@angular/common/http'
import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CategoriaModel } from '@shared/models/categoria.model'
import { SnackBarService } from '@shared/services/snackbar.service'
import { finalize } from 'rxjs'
import { AssuntoService } from '../../services/assunto.service'

@Component({
  selector: 'app-modal-delete-assunto',
  templateUrl: './modal-delete-assunto.component.html',
  styleUrls: ['./modal-delete-assunto.component.scss']
})
export class ModalDeleteAssuntoComponent {

  protected loading: boolean
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly assunto: CategoriaModel,
    private readonly _dialog: MatDialogRef<ModalDeleteAssuntoComponent>,
    private readonly _assuntoService: AssuntoService,
    private readonly _snackBarService: SnackBarService) { }

  public deleteAssunto(): void {
    this.loading = true
    this._assuntoService.deletarAssunto(this.assunto.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (_) => {
          this._snackBarService.open(`Assunto deletado com sucesso`, `success`)
          this._dialog.close(true)
        },
        error: (error: HttpErrorResponse) => {
          this._snackBarService.open(`não foi possível deletar o assunto, motivo: ${error.message}`, `error`)
        }
      })
  }

}
