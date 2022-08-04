import { Component, OnInit } from '@angular/core'
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'dezembro'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 10, 80, 30, 70],
        label: '%',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: '#1474FF'
      }
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  public lineChartLegend = true
  constructor() { }

  ngOnInit(): void {
  }

}
