import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification/authentification.service'
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {



  constructor(private alertController : AlertController,  private toastController : ToastController, private AuthService : AuthentificationService, private route : Router) { }

  //user is connected ? true of false
  userAuth : boolean ;

  //when entring at /tabs => refresh
  ionViewWillEnter() {
    this.refresh()
  } 

  //refresh => user status update
  refresh() {
    this.userAuth = this.AuthService.userAuth;
  }
    
  //allows you to search for the "connexion" routing at the root of the app
  //If we use tabs-routing-module, we cannot simulate a refresh of tabs because they are at the root of the project
  onConnectPage(){
    this.route.navigate(['connexion'])
  }

  //Alert message
  async onAlertDisconnect () {
    const alert = await this.alertController.create({
      header: 'Déconnexion',
      message: 'Voulez vous vous déconnecter ?',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'primary',
          handler: () => {
            this.disconnect()
          }
        },
      ]
    });

    alert.present();
  }
    
  //logout user
  disconnect () {
    this.AuthService.logout();
    this.refresh();
    this.toastDisconnect();

  }

  //toastmessage confirm disconnect
  async toastDisconnect() {
    const toast = await this.toastController.create({
        message: 'Vous vous êtes bien déconnecté',
        duration: 3000
    });
    toast.present();
  }
  
  ngOnInit() {
  }

}
