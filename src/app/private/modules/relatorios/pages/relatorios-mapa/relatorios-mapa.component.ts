import { Component, OnInit } from '@angular/core'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-relatorios-mapa',
  templateUrl: './relatorios-mapa.component.html',
  styleUrls: ['./relatorios-mapa.component.scss']
})
export class RelatoriosMapaComponent implements OnInit {

  protected doughnutChartLabels: string[] =
    ['Ocorrências pendentes', 'Ocorrências em tratamento', 'Ocorrências recusadas', 'Ocorrências resolvidas'];
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [140, 160, 200, 500], label: 'Series A',
      backgroundColor: ['#FF8A00', '#6AD003', '#FF0000', '#00327A'],
      hoverBackgroundColor: [
        "#FF8A00",
        "#6AD003",
        "#FF0000",
        "#00327A"
      ],
      borderColor: [
        '#FF8A00',
        '#6AD003',
        '#FF0000',
        '#00327A',
      ],
    },
  ];

  protected doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };
  protected displayedColumns: string[] = ['protocolo', 'categoria', 'data_criacao', 'dia_abertura', 'responsavel', 'status']


  protected dataSource = [
    {
      id: `1`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `2`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `3`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `4`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `5`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `6`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `pendente`,
      dias_abertura: 10
    },
    {
      id: `7`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `resolvidas`,
      dias_abertura: 10
    },
    {
      id: `8`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    },
    {
      id: `9`,
      protocolo: `mussum ipsum`,
      categoria: `mussum ipsum`,
      data_criacao: `01/01/2022`,
      responsavel: `mussum ipsum`,
      status: `recusadas`,
      dias_abertura: 10
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
