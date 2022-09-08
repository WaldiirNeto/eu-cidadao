import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { type } from 'os'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() changePage: EventEmitter<number> = new EventEmitter()
  @Input() total: number
  @Input() paginaAtual: number
  @Input() totalPorPagina: number
  fakeArray: Array<any>
  constructor() {
  }

  ngOnInit(): void {

    if (this.total > this.totalPorPagina) {
      const qtdBotoes = (this.total - this.totalPorPagina) + 1
      this.fakeArray = new Array(qtdBotoes)
    }
  }

  protected updatePage(pagina: number): void {
    this.changePage.emit(pagina)
    this.paginaAtual = pagina
  }
}
