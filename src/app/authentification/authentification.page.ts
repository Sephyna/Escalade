import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

<<<<<<< HEAD
  constructor( private authService : AuthentificationService,private router : Router) { }
=======
  constructor( private authService : AuthentificationService) { }
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144

  ngOnInit() {
  }

  onConnect(){
    this.authService.login();
<<<<<<< HEAD
   // this.router.navigate(['/tabs'])
  }

  onDisconnect(){
    this.authService.logout();
   // this.router.navigate(['/tabs'])
=======
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144
  }
}
