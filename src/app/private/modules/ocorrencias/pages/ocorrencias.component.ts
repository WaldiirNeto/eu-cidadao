import { Component, OnInit } from '@angular/core'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})
export class OcorrenciasComponent implements OnInit {

  protected doughnutChartLabels: string[]
  protected doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets']
  // = [
  //   {
  //     data: [140, 160, 200, 500], label: 'Series A',
  //     backgroundColor: ['#FF8A00', '#6AD003', '#FF0000', '#00327A'],
  //     hoverBackgroundColor: [
  //       "#FF8A00",
  //       "#6AD003",
  //       "#FF0000",
  //       "#00327A"
  //     ],
  //     borderColor: [
  //       '#FF8A00',
  //       '#6AD003',
  //       '#FF0000',
  //       '#00327A',
  //     ],
  //   },
  // ];

  protected doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };
  protected renderChartStatus: boolean
  protected total: number

  constructor() { }

  ngOnInit(): void {
  }

  // public renderChartPerStatus(event: { status: string, ocorrencias: [] }): void {

  //   let color = ''
  //   if (event.status === 'pendentes') {
  //     color = '#FF8A00'
  //   }
  //   if (event.status === 'tratamento') {
  //     color = '#6AD003'
  //   }

  //   if (event.status === 'recusadas') {
  //     color = '#FF0000'
  //   }
  //   if (event.status === 'resolvidas') {
  //     color = '#00327A'
  //   }
  //   this.doughnutChartLabels = [event.status]
  //   this.doughnutChartDatasets = [
  //     {
  //       data: [event.ocorrencias.length],
  //       backgroundColor: [color],
  //       hoverBackgroundColor: [color],
  //       borderColor: [color]
  //     }
  //   ]
  //   this.renderChartStatus = true
  //   this.total = event.ocorrencias.length
  // }
}
