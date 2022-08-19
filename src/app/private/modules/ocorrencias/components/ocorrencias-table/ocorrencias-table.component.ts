import { Component, OnInit } from '@angular/core'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { filter, Subject, takeUntil } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { ModalCreateEmployeesComponent } from '../../../employees/components/modal-create-employees/modal-create-employees.component'
import { EmployeesModel } from '../../../employees/models/employees.model'
import { OcorrenciaModel } from '../../models/ocorrencia.model'
import { ModalDetalhesOcorrenciaComponent } from '../modal-detalhes-ocorrencia/modal-detalhes-ocorrencia.component'

@Component({
  selector: 'app-ocorrencias-table',
  templateUrl: './ocorrencias-table.component.html',
  styleUrls: ['./ocorrencias-table.component.scss']
})
export class OcorrenciasTableComponent implements OnInit {

  protected displayedColumns: string[] = ['protocolo', 'assunto', 'categoria', 'responsavel', 'bairro', 'data_criacao', 'status']
  protected dataSource = [
    {
      id: `1`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `tratamento`
    },
    {
      id: `2`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `3`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `4`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `5`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `6`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `pendentes`
    },
    {
      id: `7`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `resolvidas`
    },
    {
      id: `8`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `9`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `recusadas`
    },
    {
      id: `10`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `pendentes`
    },
    {
      id: `11`,
      protocolo: `mussum ipsum`,
      assunto: `mussum ipsum`,
      categoria: `mussum ipsum`,
      responsavel: `mussum ipsum`,
      bairro: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      status: `resolvidas`
    }
  ]

  protected listOcorrencias = this.dataSource
  private selectedCategories: Array<string> = []
  private _destroy$ = new Subject()

  constructor(private _dialog: MatDialog, private _notifyComponentsService: NotifyComponentsService) { }

  ngOnInit(): void {
    this._observeNotification()
  }



  public openModalEdit(employee: EmployeesModel): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: employee
    })
  }

  public openModalDetails(): void {
    this._dialog.open(ModalDetalhesOcorrenciaComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      panelClass: 'padding-modal'
    })
  }

  public seletedCategoria(event: MatCheckboxChange): void {
    if (event.checked) {
      const id = event.source.id
      this.selectedCategories.push(id)
    } else {
      this.selectedCategories = this.selectedCategories.filter((categoryId) => categoryId !== event.source.id)
    }
  }

  public populateFullArraySelected(event: MatCheckboxChange): void {
    if (event.checked) {
      this.selectedCategories = []
      this.selectedCategories.push(...this.dataSource.map(relatorio => relatorio.id))
    } else {
      this.selectedCategories = []
    }
  }

  public checkDinamically(id: string): boolean {
    const check = this.selectedCategories.some(employeeId => employeeId === id)
    return check
  }

  private _observeNotification(): void {
    this._notifyComponentsService
      .observeNotification()
      .pipe(
        takeUntil(this._destroy$),
        filter(checkFilter => checkFilter
          &&
          (
            checkFilter.type === NotificationEnum.formFilterOcorrencia
            || checkFilter.type === NotificationEnum.formFilterOcorrenciaClear
          ))
      )
      .subscribe((notification) => {
        const filter: OcorrenciaModel = notification.values
        console.log(notification)
        if (notification.values !== null) {
          this.listOcorrencias = this.listOcorrencias.filter((occurrences) => occurrences.status === filter.status)
          this._notifyComponentsService.setNotification(NotificationEnum.tableUpdateOcorrencia, this.listOcorrencias)
        } else {
          this.listOcorrencias = this.dataSource
        }
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
