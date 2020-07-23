import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISecteur } from '../interfaces/secteur';

@Injectable({
  providedIn: 'root'
})
export class SecteursService {

  public  url : string;
  constructor( private http : HttpClient) { }
  

  getSecteurs (idSite : number) : Observable<ISecteur[]> {
    this.url = 'http://127.0.0.1:8080/secteur/'+idSite;
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<ISecteur[]>(this.url , {headers : headers});
  }
}
