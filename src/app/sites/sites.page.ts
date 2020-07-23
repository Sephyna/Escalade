import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service'
import { ISite } from '../interfaces/site'

@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})
export class SitesPage implements OnInit {
  
  private sites : ISite [] = [];

  constructor(public siteService : SitesService) { }

  ngOnInit() {

    this.siteService.getSites().subscribe(data => {
      this.sites = data;
 
    })
 
  }
  

}


    

