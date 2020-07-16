import { Component, OnInit } from '@angular/core';
import { Site } from './site.model';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})
export class SitesPage implements OnInit {
  
  sites : Site [] = [

    {

      id_site : 1,
      nom_site : "Nom du site numéro 1",
      image_site : "i.picsum.photos/id/1002/300/110.jpg",
      acces_site : "description de comment on accède",
      altitude_site : 100,
      description_site : "description  du site ",
      id_roche : 1,
      id_milieu : 1,
      id_localisation : 1,
  
  
  },
  {

    id_site : 2,
    nom_site : "Nom du site numéro 1",
    image_site : "i.picsum.photos/id/1002/300/110.jpg",
    acces_site : "description de comment on accède",
    altitude_site : 100,
    description_site : "description du site numéro 2 ",
    id_roche : 2,
    id_milieu : 2,
    id_localisation : 3,


}
    
  ];
  

  public customers = [];
  constructor(public apiService : ApiService) { }
 

  ngOnInit() {

    this.apiService.getData().subscribe(data => {
      console.log(data);
      this.customers = data;
  })}

    
}
