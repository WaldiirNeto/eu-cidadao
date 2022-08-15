import { Component, OnInit } from '@angular/core'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-infos-initial-charts',
  templateUrl: './infos-initial-charts.component.html',
  styleUrls: ['./infos-initial-charts.component.scss']
})
export class InfosInitialChartsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
