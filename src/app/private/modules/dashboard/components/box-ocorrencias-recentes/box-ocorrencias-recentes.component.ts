import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-box-ocorrencias-recentes',
  templateUrl: './box-ocorrencias-recentes.component.html',
  styleUrls: ['./box-ocorrencias-recentes.component.scss']
})
export class BoxOcorrenciasRecentesComponent implements OnInit {

  public ocorrencias_recentes = [1, 2, 3, 4]
  constructor() { }

  ngOnInit(): void {
  }

}
