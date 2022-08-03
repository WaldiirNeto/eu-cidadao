import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-category-list-box',
  templateUrl: './category-list-box.component.html',
  styleUrls: ['./category-list-box.component.scss']
})
export class CategoryListBoxComponent implements OnInit {

  protected statics = [
    {
      categoria: `Água e Esgoto`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },

    {
      categoria: `Energia e Iluminação`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Conservação e Limpeza`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Meio Ambiente`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Trânsito e vias Públicas`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Escola e Educação`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Saúde Pública`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    },
    {
      categoria: `Segurança Pública`,
      ocorrencias_abertas: 20,
      ocorrencias_tratadas: 10,
      img: `assets/images/rafiki.svg`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
