import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu : MenuController,
    private authService : AuthentificationService
    
  ) {
    this.initializeApp();
  }

  userAuth : boolean;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
 
    });
  }

  closeMenu() {
    this.menu.close();

  };

  ionWillOpen() {
    this.userAuth = this.authService.userAuth;

  };

  ionDidOpen() {
    this.userAuth = this.authService.userAuth;

  };

  authentificateUser() {
    this.userAuth = this.authService.userAuth;
  } 




}


  

