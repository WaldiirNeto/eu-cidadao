import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { MatDialog } from '@angular/material/dialog'
import { Subject } from 'rxjs'
import { ModalCreateEmployeesComponent } from '../../../employees/components/modal-create-employees/modal-create-employees.component'
import { ModalDeleteEmployeeComponent } from '../../../employees/components/modal-delete-employee/modal-delete-employee.component'
import { EmployeesModel } from '../../../employees/models/employees.model'

@Component({
  selector: 'app-ocorrencias-table',
  templateUrl: './ocorrencias-table.component.html',
  styleUrls: ['./ocorrencias-table.component.scss']
})
export class OcorrenciasTableComponent implements OnInit {
  @Output() public tableEmit: EventEmitter<Array<string>> = new EventEmitter()

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
      status: `recusadas`
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
      status: `pendente`
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
      status: `pendente`
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
  private selectedCategories: Array<string> = []
  private _destroy$ = new Subject()

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      status: new FormControl(''),
      filtro: new FormControl('')
    })
    // this._employeesService.getEmployess()
    //   .pipe()
    //   .subscribe((list) => {
    //     this.dataSource = list
    //   })
  }

  public openModalEdit(employee: EmployeesModel): void {
    this._dialog.open(ModalCreateEmployeesComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: employee
    })
  }

  public openModalDelete(employee: EmployeesModel): void {
    this._dialog.open(ModalDeleteEmployeeComponent, {
      enterAnimationDuration: `1000ms`,
      exitAnimationDuration: `500ms`,
      data: {
        employee: employee,
        isDeleteAll: false
      }
    })
  }

  public seletedCategoria(event: MatCheckboxChange): void {
    if (event.checked) {
      const id = event.source.id
      this.selectedCategories.push(id)
    } else {
      this.selectedCategories = this.selectedCategories.filter((categoryId) => categoryId !== event.source.id)
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public populateFullArraySelected(event: MatCheckboxChange): void {
    if (event.checked) {
      this.selectedCategories = []
      this.selectedCategories.push(...this.dataSource.map(relatorio => relatorio.id))
    } else {
      this.selectedCategories = []
    }
    this.tableEmit.emit(this.selectedCategories)
  }

  public checkDinamically(id: string): boolean {
    const check = this.selectedCategories.some(employeeId => employeeId === id)
    return check
  }

  ngOnDestroy(): void {
    this._destroy$.next(null)
    this._destroy$.complete()
  }
}
