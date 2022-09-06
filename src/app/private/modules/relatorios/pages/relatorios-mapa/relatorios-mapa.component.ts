import { ThisReceiver } from '@angular/compiler'
import { Component, OnInit, ViewChild } from '@angular/core'
import { GoogleMap } from '@angular/google-maps'
import { ChartConfiguration } from 'chart.js'

@Component({
  selector: 'app-relatorios-mapa',
  templateUrl: './relatorios-mapa.component.html',
  styleUrls: ['./relatorios-mapa.component.scss']
})
export class RelatoriosMapaComponent implements OnInit {
  @ViewChild('gMap', { static: false }) gMap: GoogleMap
  protected typeMap = 'satellite' as any
  protected sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

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

  ngAfterViewInit() {
    const heatMapData = [
      { location: new google.maps.LatLng(37.782, -122.447), weight: 0.5 },
      new google.maps.LatLng(37.782, -122.445),
      { location: new google.maps.LatLng(37.782, -122.443), weight: 2 },
      { location: new google.maps.LatLng(37.782, -122.441), weight: 3 },
      { location: new google.maps.LatLng(37.782, -122.439), weight: 2 },
      new google.maps.LatLng(37.782, -122.437),
      { location: new google.maps.LatLng(37.782, -122.435), weight: 0.5 },

      { location: new google.maps.LatLng(37.785, -122.447), weight: 3 },
      { location: new google.maps.LatLng(37.785, -122.445), weight: 2 },
      new google.maps.LatLng(37.785, -122.443),
      { location: new google.maps.LatLng(37.785, -122.441), weight: 0.5 },
      new google.maps.LatLng(37.785, -122.439),
      { location: new google.maps.LatLng(37.785, -122.437), weight: 2 },
      { location: new google.maps.LatLng(37.785, -122.435), weight: 3 }
    ]
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData,
    })
    // this.gMap.data.setMap(heatmap)


  }
  ngOnInit(): void {
  }

}
