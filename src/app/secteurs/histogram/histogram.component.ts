

import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthentificationService } from 'src/app/authentification/authentification.service';


@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramComponent implements AfterViewInit {
  

  private viewInited : boolean = false;
  private userAuth : boolean ;

  @Input() idSecteur: number;
  
  constructor(private authService : AuthentificationService) { }


    
  ngOnInit() 
  {
    
  }

  setViewInited(value: boolean)
  {
    this.viewInited = value;
  }

  public getViewInited()
  {
    return this.viewInited;
  }

  ngAfterViewInit()
  {
    
    this.setViewInited(true);
    this.showChart()
  }



  showChart() 
  
  {
    var dataChart = {
      type: 'bar',
        
      data: {
        labels: ["<5a", "5a", "5b", "5c", "6a", "6b", "6c", "7a", "7b", "7c", ">7c"],
        datasets: [{
          label: 'Voies simples',
          data: [5, 8, 7, 4 , 2 , 1 , 2 , 2 , 0, 1, 3],
          borderColor:  'rgba(255, 99, 132, 1)',
          backgroundColor:  'rgba(255, 99, 132, 0.5)',
          borderWidth : 1,
          barPercentage : 1.2
        },
        {
          label: 'Longues voies',
          data: [0, 2, 1 , 1 , 5 , 2 , 1 , 3 , 8 , 2 , 3],
          backgroundColor:  'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1 )',
          borderWidth : 1,
          barPercentage : 1.2
        },
        {
        label: 'Blocs',
        data: [0, 1, 5 , 0 , 0 , 0 , 0, 2, 3 , 1, 4],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth : 1,
        barPercentage : 1.2
        }]
      },
       
      options: {
         
        scales: {
          xAxes: [{
            stacked: true,

              gridLines : {
                display : false,
              },
            }],
            yAxes: [{
              display : false,
              stacked: true,
              gridLines : {
                display : false,
              },
              }]
          },

          legend: {
            display: true,
            position : 'bottom',
            labels: {
              boxWidth : 10
            }
          },
        animation: {
          duration: 1,
          onComplete: function () {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            ctx.textAlign = 'center';
            ctx.fillStyle = "rgba(0, 0 , 0, 0.6)";
            ctx.font = "bloder 12px Arial";
            ctx.textBaseline = 'hanging';

            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];
                if (data === 1 ) {
                ctx.fillText(data, bar._model.x, bar._model.y-2);
                }
                  else if (data !== 0 ) {
                  ctx.fillText(data, bar._model.x, bar._model.y+3);
                  }

                });
              });
            }
          }
      
      }
    };

    var histogram = "js-histogram" + this.idSecteur;
    var ctx = (<any>document.getElementById(histogram)).getContext('2d');
    var chart = new Chart(ctx, dataChart);
  }


   //when entring at /sites => refresh status user
   ionViewWillEnter() 
  {
    console.log('someday someone forgot about me u_u')
    this.userAuth = this.authService.userAuth;
  } 



}
