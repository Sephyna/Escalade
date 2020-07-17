import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanLoad {
  
  constructor(private  authService : AuthentificationService, private router : Router){}
 
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.userAuth) {
        this.router.navigateByUrl('tabs/authentification')
      }

    return this.authService.userAuth;
  }
}
