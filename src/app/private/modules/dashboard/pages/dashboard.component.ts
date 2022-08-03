import { Component, OnInit } from '@angular/core'
import { ChartConfiguration } from 'chart.js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total de ocorrências', backgroundColor: `#D6E7FF` },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ocorrências resolvidas', backgroundColor: `#00327A` }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };


  ngOnInit(): void {
  }

}
