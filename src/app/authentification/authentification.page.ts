import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor( private authService : AuthentificationService) { }

  ngOnInit() {
  }

  onConnect(){
    this.authService.login();
  }
}
