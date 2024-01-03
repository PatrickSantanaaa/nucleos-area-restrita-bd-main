import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexYAxis, ApexTitleSubtitle, ApexLegend, ChartComponent, ApexGrid } from 'ng-apexcharts';
import { ComunicacaoService } from 'src/app/service/comunicacao.service';
import { TokenService } from 'src/app/service/token.service';
import { ReservaPoupancaService } from './reserva-poupanca.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  grid: ApexGrid
};

@Component({
  selector: 'app-reserva-poupanca',
  templateUrl: './reserva-poupanca.component.html',
  styleUrls: ['./reserva-poupanca.component.css']
})
export class ReservaPoupancaComponent implements OnInit, AfterViewInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  saldoAtual!: number;
  series: number[] = []
  labels: string[] = []

  constructor(private service: ReservaPoupancaService,private comunicacaoService: ComunicacaoService, private tokenService: TokenService) {
    this.chartOptions = {
      series: [
        {
          name: "Reserva de Poupança",
          data: [
            22196.01,
            22996.09,
            23796.98,
            24596.87,
            25396.76,
            30196.65
          ],

          color: '#fff',
        },
      ],
      chart: {
        type: "area",
        height: 200,
        width: 500,
        zoom: {
          enabled: false
        }
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ["#fff"]
        },
        formatter: (value: any) => {
          return "R$ " + value.toLocaleString('pt-br', {minimumFractionDigits: 2})
        },
      },
      stroke: {
        curve: "straight",
        show: true,
        lineCap: 'butt',
        colors: ["#FFF"],
        width: 2,
      },
      title: {
        text: "Histórico da Poupança",
        align: "left",
        style: {
          fontSize:  '14px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#fff'
        },
      },
      subtitle: {
        text: "Últimas Movimentações",
        align: "left",
        style: {
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#fff'
        },
      },
      labels: [
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      xaxis: {
        labels: {
          formatter: (value: any) => {
            const dataObj = new Date(value);

            const monthIndex = dataObj.getMonth();
            let nomeMesAbreviado;

            switch (monthIndex) {
              case 0: nomeMesAbreviado = 'Jan'; break;
              case 1: nomeMesAbreviado = 'Fev'; break;
              case 2: nomeMesAbreviado = 'Mar'; break;
              case 3: nomeMesAbreviado = 'Abr'; break;
              case 4: nomeMesAbreviado = 'Mai'; break;
              case 5: nomeMesAbreviado = 'Jun'; break;
              case 6: nomeMesAbreviado = 'Jul'; break;
              case 7: nomeMesAbreviado = 'Ago'; break;
              case 8: nomeMesAbreviado = 'Set'; break;
              case 9: nomeMesAbreviado = 'Out'; break;
              case 10: nomeMesAbreviado = 'Nov'; break;
              case 11: nomeMesAbreviado = 'Dez'; break;
              default: nomeMesAbreviado = '';
            }
            console.log(nomeMesAbreviado)
            return nomeMesAbreviado
          },
          style: {
            colors: '#fff'
          }
        }
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#fff'
          },
          formatter: (value: any) => {
            return "R$ " + value.toLocaleString('pt-br', {minimumFractionDigits: 2})
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      }
    };

    // this.comunicacaoService.recuperaReservaPoupanca().subscribe(response => {
    //   console.log(response)
    //   this.saldoAtual = response.valorSaldoReserva
    // })

    let dadosGerais = this.tokenService.recuperaDadosGerais()

    this.saldoAtual = dadosGerais.valorSaldoReserva
   }

   ngAfterViewInit() {

    this.service.recuperaMesAno().subscribe( (response : any[]) =>{
      console.log(response)
      this.chartOptions.series[0].data = []
      this.chartOptions.labels = []
      response.map(obj =>{
        this.series.unshift(obj.valorReservaPoupancaLiquida)
        this.labels.unshift(obj.dataBase)
      })
      console.log(this.chartOptions.labels)
      this.chartOptions.series[0].data = this.series;
      this.chartOptions.labels = this.labels;
      console.log(this.chartOptions.labels)
      // this.chart.appendSeries([
      //   {
      //     name: 'series_1',
      //     data: this.series
      //   }
      // ])
  })
}


    ngOnInit() {
    //   this.service.recuperaMesAno().subscribe( (response : any[]) =>{
    //     console.log(response)
    //     this.chartOptions.series[0].data = []
    //     this.chartOptions.labels = []
    //     response.map(obj =>{
    //       this.series.unshift(obj.valorReservaPoupancaLiquida)
    //       this.labels.unshift(obj.dataBase)
    //     })
    //     console.log(this.chartOptions.labels)
    //     this.chart.updateSeries([
    //       {
    //         name: 'series_1',
    //         data: this.series
    //       }
    //     ])
    // })
  }
}
