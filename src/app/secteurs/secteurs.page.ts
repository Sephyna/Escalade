import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { PopoverController } from '@ionic/angular';
import { RatingSitePage } from './rating-site/rating-site.page';
import { AuthentificationService } from '../authentification/authentification.service';
import { SecteursService } from '../services/secteurs.service';
import { ISecteur } from '../interfaces/secteur';
import { ISite } from '../interfaces/site';
import { SitesService } from '../services/sites.service';
import { ActivatedRoute } from '@angular/router';
import { IVoie } from '../interfaces/voie';
import { Subscription } from 'rxjs';
import { VoiesService } from '../services/voies.service';
import { HistogramComponent } from './histogram/histogram.component';



@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.page.html',
  styleUrls: ['./secteurs.page.scss'],
})


export class SecteursPage implements OnInit, OnDestroy {
  @ViewChild(HistogramComponent)
  private histogramComponent: HistogramComponent;
  private secteurs : ISecteur [] = [];

  private site : ISite;


  private simplesVoies : IVoie[] =[];
  private grandesVoies : IVoie[] =[];
  private blocs : IVoie[] =[];

  private cotationSimplesVoies;
  private cotationGrandesVoies;
  private cotationBlocs;

  private siteId : number;

  private secteursId = [];
  private reducedCotationBlocs : string;
  private reducedCotationSimplesVoies : string;
  private reducedCotationGrandesVoies : string;

  private IdSecteur : number;


  //user is connected ? true of false
  private userAuth : boolean ;


  private siteDataProcessed : boolean = false;
  private secteurDataProcessed : boolean = false;

  constructor(private popoverController: PopoverController,
              private authService : AuthentificationService,
              private secteurService : SecteursService,
              private siteService : SitesService,
              private activatedRoute : ActivatedRoute,
              private voieService : VoiesService) { }

  async popupNotation() 
  {
    const popover = await this.popoverController.create({
      component: RatingSitePage,
    });
    return await popover.present();
  }


  ngOnInit() 
  {
    this.getIdSite();
    this.ProcessSiteData(this.siteId);
    this.ProcessSecteurData(this.siteId);
    this.showChart(this.secteursId, this.reducedCotationSimplesVoies, this.reducedCotationGrandesVoies, this.reducedCotationGrandesVoies);
    
    
  };

  checkForChartDataProcess()
  {
    if(this.siteDataProcessed && this.secteurDataProcessed && this.histogramComponent.getViewInited())
    {
      //wow i can do stuff
      console.log(this.secteurs)
      
      this.histogramComponent.showChart();



      this.setSiteDataProcessed(false);
      this.setSecteurDataProcessed(false);
    }
  }

  setSecteurDataProcessed(value: boolean)
  {
    this.secteurDataProcessed = value;
    this.checkForChartDataProcess();
  }
  setSiteDataProcessed(value: boolean)
  {
    this.siteDataProcessed = value;
    this.checkForChartDataProcess();
  }
  getIdSite () 
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
        if(!paramMap.has('id'))
        {
          return;
        }
        this.siteId = Number(paramMap.get('id'));
      })
  }

  ProcessSiteData(idSite : number)
  {
    this.siteService.getSite(idSite).subscribe((data, origin = this) => {
      const req = data;
      //comme la requete donne un tableau d'objets, je souhaite retrouver les données de sa première ligne, étant le seul résultat. 
      this.site = req[0];
      origin.setSiteDataProcessed(true);
      
     });
  }

  ProcessSecteurData (idSite : number)
  {
    this.secteurService.getSecteurs(idSite).subscribe((data, origin = this) => {
    this.secteurs = data;
    // pour chaque secteur
    for (let secteur of this.secteurs) 
    {
      this.processCotationSimplesVoies (secteur.id);
      this.processCotationGrandesVoies (secteur.id);
      this.processCotationBlocs (secteur.id) 
      this.generateHistogram(secteur.id,this.reducedCotationSimplesVoies,this.reducedCotationGrandesVoies,this.reducedCotationBlocs)
      origin.setSecteurDataProcessed(true);  
    }
    
  });

  }

  processCotationSimplesVoies (idSecteur : number ) 
  {
    this.voieService.getSimplesVoies(idSecteur).subscribe(data => {
      this.simplesVoies = data;

      for (let simpleVoie of this.simplesVoies) 
      {
        this.cotationSimplesVoies = simpleVoie.cotation;
        this.reduceSizeCotation (this.cotationSimplesVoies, this.reducedCotationSimplesVoies);

      }
    });

  }

  processCotationGrandesVoies (idSecteur : number ) 
  {
    this.voieService.getGrandesVoies(idSecteur).subscribe(data => {
      this.grandesVoies = data;

      for (let grandeVoie of this.grandesVoies) 
      {
        this.cotationGrandesVoies = grandeVoie.cotation;
        this.reduceSizeCotation (this.cotationGrandesVoies,  this.reducedCotationGrandesVoies);

      }
    });

  }

  processCotationBlocs (idSecteur : number ) 
  {
    this.voieService.getBlocs(idSecteur).subscribe(data => {
      this.blocs = data;

      for (let bloc of this.blocs) 
      {
        this.cotationBlocs = bloc.cotation;
        this.reduceSizeCotation (this.cotationBlocs,this.reducedCotationBlocs);

      }

    });

  }

  reduceSizeCotation (cotation : string, reducedCotation :string) 
  {
     if (cotation.length > 2) 
     {
        reducedCotation = cotation.substring(0, cotation.length - 1)
     }
     else 
     {
        reducedCotation = cotation;
     }

     if(reducedCotation == "4a" || reducedCotation  == "4b" || reducedCotation  == "4c")
     {
        reducedCotation = "<5a";
     }
     else if ( reducedCotation == "8a" || reducedCotation  == "8b" || reducedCotation  == "8c" || reducedCotation  == "9a" || reducedCotation  == "9b" || reducedCotation  == "9c")
     {
       reducedCotation  = ">7c";
     }
  }

 


  ngOnDestroy () 
  
  
  {



  };

  private async generateHistogram (idSecteur, cotationSimpleVoies : string, cotationGrandesVoies : string, cotationBlocs : string)
  {

    console.log(await cotationSimpleVoies)
    


  }


 
  showChart(IdSecteurs, cotationSimpleVoies : string, cotationGrandesVoies :string, cotationBlocs : string) 
  
  {


    var ctx = (<any>document.getElementById('cotations-voies')).getContext('2d');
    var chart = new Chart(ctx, {
      
        type: 'bar',
        
        data: {
        labels: ["<5a", "5a", "5b", "5c", "6a", "6b", "6c", "7a", "7b", "7c", ">7c"],
        datasets: [{
          label: 'Voies simple',
          data: [5, 8, 7, 4 , 2 , 1 , 2 , 2 , 0, 1, 3],
          borderColor:  'rgba(255, 99, 132, 1)',
          backgroundColor:  'rgba(255, 99, 132, 0.5)',
          borderWidth : 1,
          barPercentage : 1.2
       }, {
          label: 'Longues voies',
          data: [0, 2, 1 , 1 , 5 , 2 , 1 , 3 , 8 , 2 , 3],
          backgroundColor:  'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1 )',
          borderWidth : 1,
          barPercentage : 1.2
       }, {
          label: 'Blocs',
          data: [0, 1, 5 , 0 , 0 , 0 , 0, 2, 3 , 1, 4],
          backgroundColor: 'rgba(255, 206, 86, 0.5)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth : 1,
          barPercentage : 1.2
       } ]
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
            },
          ]
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

    
    
    
    });

  }


   //when entring at /sites => refresh status user
   ionViewWillEnter() {
    this.userAuth = this.authService.userAuth;
   } 


  

}
