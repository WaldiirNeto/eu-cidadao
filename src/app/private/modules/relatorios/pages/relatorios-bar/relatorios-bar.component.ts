import { Component, OnInit } from '@angular/core'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-relatorios-bar',
  templateUrl: './relatorios-bar.component.html',
  styleUrls: ['./relatorios-bar.component.scss']
})
export class RelatoriosBarComponent implements OnInit {

  protected listUsers = [
    {
      qtd: `10.000`,
      content: `Novos usuários`,
      icon: `accessibility_new`
    },
    {
      qtd: `100.000`,
      content: `total de usuários`,
      icon: `person`

    },
    {
      qtd: `30.000`,
      content: `total de ocorrências`,
      icon: `border_color`

    },
    {
      qtd: `10.000`,
      icon: `check_box`,
      content: `Total de respostas`
    }
  ]

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Novos usuários', backgroundColor: `#D6E7FF` },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  // ocorrencia
  public barChartLegendOcorrencia = true;
  public barChartPluginsOcorrencia = [];

  public barChartDataOcorrencia: ChartConfiguration<'bar'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      { data: [20, 30, 80, 73, 90, 55, 40], label: 'Ocorrências abertas', backgroundColor: `#407BFF` },
    ]
  };

  public barChartOptionsOcorrencia: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  //ocorrencia resolvida
  public barChartLegendOcorrenciaResolvida = true;
  public barChartPluginsOcorrenciaResolvida = [];

  public barChartDataOcorrenciaResolvida: ChartConfiguration<'bar'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      { data: [5, 15, 20, 45, 43, 50, 10], label: 'Ocorrências resolvidas', backgroundColor: `#00327A` },
    ]
  };

  public barChartOptionsOcorrenciaResolvida: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };


  constructor() { }

  ngOnInit(): void {
  }

}
