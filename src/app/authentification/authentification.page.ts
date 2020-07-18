import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor( private authService : AuthentificationService,private router : Router) { }

  ngOnInit() {
  }

  onConnect(){
    this.authService.login();
  }

  onDisconnect(){
    this.authService.logout();
  }
}
