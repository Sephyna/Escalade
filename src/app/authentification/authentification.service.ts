import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public userAuth = false;

  constructor() { }

  login(){
    this.userAuth = true;
    console.log(this.userAuth)
  }

<<<<<<< HEAD
  logout(){
=======
  Logout(){
>>>>>>> 97ccaf635b19b3a41b2a643a36c114213abdd144
    this.userAuth = false
  }
}
