import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent implements OnInit {

  @Input() thDescription: string
  @Input() coluna: string
  @Input() ordenacaoInicial: { filtro: string | undefined, ordem: string | undefined }
  @Output() ordenacao: EventEmitter<{ ordenarPor: string, ordem: string }> = new EventEmitter()

  protected ordernandoPorAsc: boolean = false
  protected ordernandoPorDesc: boolean = false
  protected iconName: string

  constructor() { }

  ngOnInit(): void {
    this.sortIcon()
  }
  public sortIcon(): void {
    if (this.ordenacaoInicial?.filtro === this.coluna && this.ordenacaoInicial.ordem === `ASC`) {
      this.iconName = `south`
    }
    else if (this.ordenacaoInicial?.filtro === this.coluna && this.ordenacaoInicial.ordem === `DESC`) {
      this.iconName = `north`
    }

    else if (this.ordenacaoInicial?.filtro !== this.coluna) {
      this.iconName = `swap_vert`
    }

  }

  public ordenarLista(): void {
    if (this.iconName !== `swap_vert`) {
      if (this.ordenacaoInicial.ordem === `ASC`) {
        this.ordenacao.emit({ ordenarPor: this.coluna, ordem: `DESC` })
      } else {
        this.ordenacao.emit({ ordenarPor: this.coluna, ordem: `ASC` })
      }
    } else {
      this.ordenacao.emit({ ordenarPor: this.coluna, ordem: `ASC` })

    }
  }
}
