import { Component, OnInit, OnDestroy} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RatingSitePage } from './rating-site/rating-site.page';
import { AuthentificationService } from '../authentification/authentification.service';
import { SecteursService } from '../services/secteurs.service';
import { ISecteur } from '../interfaces/secteur';
import { ISite } from '../interfaces/site';
import { SitesService } from '../services/sites.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.page.html',
  styleUrls: ['./secteurs.page.scss'],
})


export class SecteursPage implements OnInit, OnDestroy {

  private secteurs : ISecteur [] = [];
  private site : ISite;
  private siteId : number;
  private IdSecteur : number;

  //user is connected ? true of false
  private userAuth : boolean ;


  private siteDataProcessed : boolean = false;
  private secteurDataProcessed : boolean = false;

  constructor(private popoverController: PopoverController,
              private authService : AuthentificationService,
              private secteurService : SecteursService,
              private siteService : SitesService,
              private activatedRoute : ActivatedRoute) { }

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
   
    
  };

  checkForChartDataProcess()
  {
    if(this.siteDataProcessed && this.secteurDataProcessed)
    {
      //wow i can do stuff
      
      
      



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
        origin.setSecteurDataProcessed(true);  
      }
      
    });
  }

 


  ngOnDestroy () 
  
  
  {



  };

 


   //when entring at /sites => refresh status user
   ionViewWillEnter() {
    this.userAuth = this.authService.userAuth;
   } 


  

}
