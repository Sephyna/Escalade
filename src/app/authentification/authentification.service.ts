import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  //user connected ?
  public userAuth = false;

  constructor() { }

  login(){
    this.userAuth = true;
  }

  logout(){
    this.userAuth = false
  }
}
